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
      ['icon_add', 'ic_add_24px.svg'],
      ['icon_clear', 'ic_clear_24px.svg'],
      ['icon_done', 'ic_done_24px.svg']
    ];

    icons.forEach(([name, filename]) => {
      this.matIconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/' + filename)
      );
    });
  }
}
