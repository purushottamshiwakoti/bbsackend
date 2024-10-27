import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentHero extends Schema.Component {
  collectionName: 'components_component_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Attribute.String;
    buttonName: Attribute.String;
    image: Attribute.Media<'images'>;
    alt: Attribute.String;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Attribute.Text;
    email: Attribute.Email;
    links: Attribute.Component<'component.link', true>;
    newsletter: Attribute.Text;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    navbar: Attribute.Component<'component.link', true>;
  };
}

export interface ReusableAbout extends Schema.Component {
  collectionName: 'components_reusable_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text;
    Text1: Attribute.String & Attribute.Required;
    Description1: Attribute.Text & Attribute.Required;
    Text2: Attribute.String & Attribute.Required;
    Description2: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableGallery extends Schema.Component {
  collectionName: 'components_reusable_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ReusableMenu extends Schema.Component {
  collectionName: 'components_reusable_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface ReusableSeo extends Schema.Component {
  collectionName: 'components_reusable_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String & Attribute.Required;
    MetaDescription: Attribute.Text & Attribute.Required;
    OgImage: Attribute.Media<'images'> & Attribute.Required;
    CanonicalUrl: Attribute.String & Attribute.Required;
    Schema: Attribute.Text;
    ReviewSchema: Attribute.Text;
    ImageSchema: Attribute.Text;
    ImagePackSchema: Attribute.Text;
    VideoSchema: Attribute.Text;
    FeaturedSchema: Attribute.Text;
    RelatedSearchSchema: Attribute.Text;
    PeopleAlsoAskSchema: Attribute.Text;
    BreadcrumbSchema: Attribute.Text;
    OrganizationSchema: Attribute.Text &
      Attribute.DefaultTo<'{   "@context": "https://schema.org",   "@type": "Organization",   "name": "BBS Tutorial",   "alternateName": "BBSTutorial",   "url": "https://www.bbstutorial.com",   "logo": "https://www.bbstutorial.com/logo.png",   "sameAs": [     "https://www.facebook.com/bbstutorial",     "https://www.instagram.com/bbstutorial/",     "https://www.youtube.com/@bbs-tutorial"   ] }'>;
  };
}

export interface ReusableSocial extends Schema.Component {
  collectionName: 'components_reusable_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    Facebook: Attribute.String & Attribute.Required;
    Twitter: Attribute.String & Attribute.Required;
    Instagram: Attribute.String & Attribute.Required;
    Google: Attribute.String & Attribute.Required;
  };
}

export interface ReusableSwiper extends Schema.Component {
  collectionName: 'components_reusable_swipers';
  info: {
    displayName: 'Swiper';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    ogImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.hero': ComponentHero;
      'component.link': ComponentLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'reusable.about': ReusableAbout;
      'reusable.gallery': ReusableGallery;
      'reusable.menu': ReusableMenu;
      'reusable.seo': ReusableSeo;
      'reusable.social': ReusableSocial;
      'reusable.swiper': ReusableSwiper;
      'seo.seo': SeoSeo;
    }
  }
}
