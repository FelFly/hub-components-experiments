import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import * as Metadata from '../../../utils/metadata-utils'
import * as Locale from '../../../utils/locale'
import { sendTelemetry } from '../../../utils/telemetry-utils'

@Component({
  tag: 'metadata-form',
  styleUrl: 'metadata-form.css',
  shadow: true,
})
export class MetadataForm {

  @Element() element: HTMLElement;

  @Prop() spec:string = "arcgis";
  @Prop() locale:string = "en";
  @Prop({ mutable: true, reflect: true }) resource:any = null;

  @State() sections: Array<any> = [];
  @State() strings: any; 
  @State() elementTitle: string;
  @State() description: string;

  async componentWillLoad() {
    this.sections = await this.loadSpecification();
    this.locale = this.locale || Locale.getComponentClosestLanguage(this.element);

    this.elementTitle = this.sections['title'];
    this.description = this.sections['description'];

    // TODO: send input translation down to components
    Locale.getMetadataLocaleStrings(this.spec, this.locale).then((result) => {
      this.strings = result;
      this.elementTitle = this.strings.t(`${this.spec}.metadata.${this.spec}.title`)
      this.description = this.strings.t(`${this.spec}.metadata.${this.spec}.description`)
    })

    sendTelemetry({
      category: 'hub-component',
      action: 'hub-metadata-form:loaded', 
      label: this.spec
    });
  }

  private async loadSpecification() {
    const file = `./schema/${this.spec}.json`
    return await Metadata.getMetadataSpec(file);
  }

  // When an element updates and merges into the resource object.
  @Listen('resourceUpdated')
  resourceUpdated(event) {
    console.log("trace metadata-form: resourceUpdated", event.detail)
  }

  render() {
    console.log("MetadataForm: render", this.resource)
    return (
      <Host>
        <slot></slot>
        <metadata-section-view
          elementTitle={this.elementTitle}
          description={this.description}
          inputs={this.sections['properties']}
          resource={this.resource}
        ></metadata-section-view>
      </Host>
    );
  }
}