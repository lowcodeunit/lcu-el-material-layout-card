import { NgModule } from '@angular/core';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lowcodeunit/common';
import { BaseDisplayModule, ForgeBuildersCoreModule } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutCardBuilderComponent } from './material-layout-card-builder/material-layout-card-builder.component';
import { ForgeMaterialLayoutCardMarketplaceComponent } from './material-layout-card-marketplace/material-layout-card-marketplace.component';
import { ForgeMaterialLayoutCardRenderComponent } from './material-layout-card-render/material-layout-card-render.component';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';

export class ForgeMaterialLayoutCardDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeMaterialLayoutCardBuilderComponent;
	}

	public Marketplace() {
		return ForgeMaterialLayoutCardMarketplaceComponent;
	}

	public Render() {
		return ForgeMaterialLayoutCardRenderComponent;
	}
}

var comps = [
	ForgeMaterialLayoutCardBuilderComponent,
	ForgeMaterialLayoutCardMarketplaceComponent,
	ForgeMaterialLayoutCardRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		ForgeBuildersCoreModule,
		DndModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
		MatToolbarModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeMaterialLayoutCardModule { }
