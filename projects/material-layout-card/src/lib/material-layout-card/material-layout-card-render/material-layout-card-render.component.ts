import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig } from '../material-layout-card.core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'forge-material-layout-card-render',
	templateUrl: './material-layout-card-render.component.html',
	styleUrls: ['./material-layout-card-render.component.scss']
})
export class ForgeMaterialLayoutCardRenderComponent
	extends ForgeGenericControl<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig>
	implements IControlRender<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector, protected sanitizer: DomSanitizer) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods
	public CleanImage(src: string) {
		return this.sanitizer.bypassSecurityTrustUrl(src);
	}

	//	Helpers
}
