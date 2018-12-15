import { Component, Injector } from '@angular/core';
import { IControlBuilder, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig } from '../material-layout-card.core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'forge-material-layout-card-builder',
	templateUrl: './material-layout-card-builder.component.html',
	styleUrls: ['./material-layout-card-builder.component.scss']
})
export class ForgeMaterialLayoutCardBuilderComponent
	extends ForgeGenericControl<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig>
	implements IControlBuilder<ForgeMaterialLayoutCardDetails, ForgeMaterialLayoutCardConfig> {
	//  Fields

	//  Properties
	public HeaderEnabled: boolean;

	//  Constructors
	constructor(protected injector: Injector, protected sanitizer: DomSanitizer) {
		super(injector);
	}

	//	Life Cycle
	public ngOnInit() {
		super.ngOnInit();

		this.HeaderEnabled = !!this.Details.Title || !!this.Details.Subtitle || !!this.Details.CardAvatarClass;
	}

	//	API Methods
	public CleanImage(src: string) {
		return this.sanitizer.bypassSecurityTrustUrl(src);
	}

	//	Helpers
}
