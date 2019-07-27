import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  init() {
    const icons = [
      ['add',    'round-add-24px.svg'],
      ['cancel', 'round-cancel-24px.svg'],
      ['check',  'round-check_circle-24px.svg']
    ];

    icons.forEach(([name, filename]) => {
      this.matIconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/' + filename)
      );
    });
  }
}
