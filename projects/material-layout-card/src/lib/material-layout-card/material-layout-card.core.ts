import { ForgeRenderingDetails, PageElement } from '@lowcodeunit/core';

export class ForgeMaterialLayoutCardDetails extends ForgeRenderingDetails<ForgeMaterialLayoutCardConfig> {
	public Actions: PageElement;

	public CardAvatarClass: string;

	public CardImage: string;

	public CardImageAltText: string;

	public Footer: PageElement;

	public Subtitle: string;

	public Title: string;
}

export class ForgeMaterialLayoutCardConfig {
}
