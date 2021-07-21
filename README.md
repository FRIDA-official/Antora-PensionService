# Antora-PensionService

openapi-generator-cli generate -g asciidoc -i  .\example.yaml
site:
  title: FRIDA-Pension
  url: https://docs.freeinsurancedata.de
content:
  sources:
    - url: https://gitlab.com/antora/demo/demo-component-a.git
ui:
  bundle:
    url: https://gitlab.com/antora/antora-ui-default/-/jobs/artifacts/master/raw/build/ui-bundle.zip?job=bundle-stable
    snapshot: true

test