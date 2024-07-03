import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusable.about': ReusableAbout;
      'reusable.gallery': ReusableGallery;
      'reusable.menu': ReusableMenu;
      'reusable.social': ReusableSocial;
      'reusable.swiper': ReusableSwiper;
    }
  }
}
