import type { Schema, Struct } from '@strapi/strapi';

export interface BlockAds extends Struct.ComponentSchema {
  collectionName: 'components_block_ads';
  info: {
    displayName: 'Ads';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlockHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_block_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    slider_hero: Schema.Attribute.Relation<
      'oneToOne',
      'api::banner-hero.banner-hero'
    >;
    titulo: Schema.Attribute.String;
  };
}

export interface ElementosLogo extends Struct.ComponentSchema {
  collectionName: 'components_elementos_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    imagem: Schema.Attribute.Media<'images'>;
  };
}

export interface ParceirosValorItem extends Struct.ComponentSchema {
  collectionName: 'components_parceiros_valor_items';
  info: {
    description: 'Bloco de valores exibidos na p\u00E1gina de parceiros';
    displayName: 'Valor Item';
  };
  attributes: {
    descricao: Schema.Attribute.Text & Schema.Attribute.Required;
    icone: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ParceirosValores extends Struct.ComponentSchema {
  collectionName: 'components_parceiros_valores';
  info: {
    displayName: 'valores';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.ads': BlockAds;
      'block.hero-section': BlockHeroSection;
      'elementos.logo': ElementosLogo;
      'parceiros.valor-item': ParceirosValorItem;
      'parceiros.valores': ParceirosValores;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
