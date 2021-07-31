window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {"swaggerDoc":{"openapi":"3.0.1","info":{"title":"FRIDA PensionSerivce","description":"base specs without dependencies","termsOfService":"https://github.com/FRIDA-official","contact":{"email":"anton.rott@accenture.com"},"license":{"name":"Apache 2.0","url":"http://www.apache.org/licenses/LICENSE-2.0.html"},"version":"0.0.1"},"externalDocs":{"description":"Hier folgt noch ein Verweis auf die externe Doku","url":"http://swagger.io"},"servers":[{"url":"https://test-api-impl-backend-jaxrs.herokuapp.com/v2"}],"paths":{"/RentenKalkulation":{"post":{"summary":"Nutzt oAuth2","security":[{"oAuth2":["RenteKalkulieren"]}],"tags":["Kalkulierung"],"operationId":"berechneRente","responses":{"200":{"description":"Erfolgreiche Berechnung","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ContractResponse"}}}},"403":{"description":"Authorisierungsfehler","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorList"}}}},"500":{"description":"Generischer Fehler","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorList"}}}}},"requestBody":{"$ref":"#/components/requestBodies/RentenSummeRequest"}}},"/VertraegeAbrufen":{"post":{"summary":"Nutzt oAuth2","security":[{"oAuth2":["VertraegeAbrufen"]}],"tags":["Abfrage"],"operationId":"rufeVertraege ab","responses":{"200":{"description":"Erfolgreicher Abruf","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VisableContractsResponse"}}}},"403":{"description":"Authorisierungsfehler","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorList"}}}},"500":{"description":"Generischer Fehler","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorList"}}}}},"requestBody":{"$ref":"#/components/requestBodies/VisableContractsRequest"}}}},"components":{"requestBodies":{"RentenSummeRequest":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ContractRequest"}}},"description":"Alle zur Rentenkalkulation benötigten Attribute","required":true},"VisableContractsRequest":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/VisableContractsRequest"}}},"description":"Liste der Vertraege des Kunden","required":true}},"schemas":{"VisableContractsRequest":{"type":"object","properties":{"id_client":{"type":"string"}}},"VisableContractsResponse":{"type":"object","properties":{"list_contractsOfClient":{"type":"array","items":{"type":"string","description":"contract of client"}}}},"Interest":{"type":"object","properties":{"number_interest":{"type":"number","format":"double"}}},"Factor":{"type":"object","properties":{"number_factor":{"type":"number","format":"double"}}},"Amount":{"type":"object","properties":{"sum":{"type":"number","format":"double"},"currency":{"type":"string","format":"string","example":"EUR"}}},"Date":{"type":"string","format":"date","description":"Date in YYYY-DD-MM Format"},"ErrorList":{"type":"object","required":["errors"],"properties":{"errors":{"type":"array","items":{"type":"object","required":["code","title","detail"],"properties":{"code":{"type":"string","description":"The code of the error"},"title":{"type":"string","description":"A displayable title of the error type"},"detail":{"type":"string","description":"Detail of the error"},"meta":{"type":"object","description":"Optional additional data for specific error types"}}}}}},"ContractRequest":{"type":"object","properties":{"contractNumber":{"type":"string","format":"string","description":"Unique Identifier for contract"}}},"ContractResponse":{"type":"object","properties":{"contractList":{"type":"array","items":{"$ref":"#/components/schemas/ContractCore"}}}},"Product":{"type":"object","properties":{"productId":{"type":"string","format":"string"},"currentPensionAssets":{"$ref":"#/components/schemas/Amount"}}},"ContractCore":{"type":"object","required":["productId"],"properties":{"productList":{"type":"array","items":{"$ref":"#/components/schemas/Product"}},"amount_payments_contribution_current":{"$ref":"#/components/schemas/Amount"},"amount_contribution_payments_current_employer_and_employee":{"$ref":"#/components/schemas/Amount"},"amount_paid_annually_allowances_current":{"$ref":"#/components/schemas/Amount"},"factor_pension_for_10k_savings":{"$ref":"#/components/schemas/Factor"},"amount_pension_assets_insurance_current_value":{"$ref":"#/components/schemas/Amount"},"amount_pension_assets_insurance_current_fund_value":{"$ref":"#/components/schemas/Amount"},"amount_pension_as_of_today":{"$ref":"#/components/schemas/Amount"},"interest_extrapolation_assumptions_net_interest_different_scenarios":{"$ref":"#/components/schemas/Interest"},"type_of_insurance":{"oneOf":[{"$ref":"#/components/schemas/TypeOfInsurance"},{"enum":[{"id":"1","full_name_de":"Direktversicherung (klassisch)"},{"id":"2","full_name_de":"Riester Versicherung (klassisch)"},{"id":"3","full_name_de":"Basisrente - klassisch"}]}]},"percent_profit_participation_current":{"type":"number","format":"double"},"amount_payments_contribution":{"$ref":"#/components/schemas/Amount"},"date_notification_status_contract":{"$ref":"#/components/schemas/Date"},"date_retirement_in_contract":{"$ref":"#/components/schemas/Date"},"interest_total_return_current":{"$ref":"#/components/schemas/Interest"},"amount_fund_capital_ with_fund_growth_by_percent":{"$ref":"#/components/schemas/Amount"},"amount_fund_capital_with_growth_at_start_of_retirement_based_on_current_contributions":{"$ref":"#/components/schemas/Amount"},"amount_fund_capital_with_growth_at_start_of_retirement_without_further_contributions":{"$ref":"#/components/schemas/Amount"},"percent_guaranteed":{"type":"number","format":"double"},"amount_guarantee_capital_start_of_retirement":{"$ref":"#/components/schemas/Amount"},"amount_guaranteed_capital_as_of_today":{"$ref":"#/components/schemas/Amount"},"amount_capital_guaranteed_based_on_current_contributions":{"$ref":"#/components/schemas/Amount"},"amount_capital_guaranteed_without_further_contributions":{"$ref":"#/components/schemas/Amount"},"factor_pension_for_10k_savings_guaranteed":{"$ref":"#/components/schemas/Factor"},"interest_guaranteed":{"$ref":"#/components/schemas/Interest"},"amount_extrapolation_pension_assets":{"$ref":"#/components/schemas/Amount"},"amount_extrapolation_pension_assets_guaranteed":{"$ref":"#/components/schemas/Amount"},"amount_pension_with_participation_based_on_current_contributions":{"$ref":"#/components/schemas/Amount"},"amount_pension_with_participation_based_on_current_contributions_and_allowances":{"$ref":"#/components/schemas/Amount"},"amount_pension_with_participation_without_further_contributions_and_without_allowances":{"$ref":"#/components/schemas/Amount"},"amount_pension_with_participation_without_further_contributions":{"$ref":"#/components/schemas/Amount"},"amount_pension_with_fund_growth_by_percent":{"$ref":"#/components/schemas/Amount"},"amount_pension_guaranteed_based_on_current_contributions":{"$ref":"#/components/schemas/Amount"},"amount_pension_guranteed_based_on_current_contributions_and_allowances":{"$ref":"#/components/schemas/Amount"},"amount_pension_guranteed_without_further_contributions_and_without_allowances":{"$ref":"#/components/schemas/Amount"},"amount_pension_guaranteed_without_further_contributions":{"$ref":"#/components/schemas/Amount"},"flag_child_allowances":{"type":"boolean"},"children":{"type":"array","items":{"$ref":"#/components/schemas/Child"}},"id_pia_class":{"oneOf":[{"$ref":"#/components/schemas/PIAClass"},{"enum":["CRK1","CRK2","CRK3","CRK4","CRK5"]}]},"factor_pension_if_not_converted_into_oldage_pension":{"$ref":"#/components/schemas/Factor"},"amount_riester_credit_payments_and_allowances_as_of_today":{"$ref":"#/components/schemas/Amount"},"date_start_insurance_contract":{"$ref":"#/components/schemas/Date"},"name_policyholder":{"type":"string"}}},"TypeOfInsurance":{"type":"object","description":"Complex object for type of insurance, according to GDV","properties":{"id":{"type":"string"},"full_name_de":{"type":"string"}}},"PIAClass":{"type":"object","description":"Complex object for PIA Class, according to https://produktinformationsstelle.de/","properties":{"id":{"type":"string"}}},"Child":{"type":"object","properties":{"birthdate":{"$ref":"#/components/schemas/Date"}}}},"securitySchemes":{"oAuth2":{"type":"oauth2","flows":{"implicit":{"authorizationUrl":"https://frida-demo.okta.com/oauth2/default/v1/authorize?nonce=kdkdkl","scopes":{"RenteKalkulieren":"Read contract information","openid":"OpenId subject"}},"authorizationCode":{"authorizationUrl":"https://frida-demo.okta.com/oauth2/default/v1/authorize?nonce=kdkdkl","tokenUrl":"https://frida-demo.okta.com/oauth2/default/v1/token?nonce=kdkdkl","scopes":{"RenteKalkulieren":"Read contract information","openid":"OpenId subject"}}}}}}},"customOptions":{},"swaggerUrl":"//json"}
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)
  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }
  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  window.ui = ui
}