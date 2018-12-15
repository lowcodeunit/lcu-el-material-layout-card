import { Component, Injector } from '@angular/core';
import { IControlMarketplace, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig } from '../material-layout-card.core';

@Component({
	selector: 'forge-material-layout-card-marketplace',
	templateUrl: './material-layout-card-marketplace.component.html',
	styleUrls: ['./material-layout-card-marketplace.component.scss']
})
export class ForgeMaterialLayoutCardMarketplaceComponent
	extends ForgeGenericControl<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig>
	implements IControlMarketplace<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
