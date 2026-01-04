import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    description: 'Write about yourself and the content you create';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdAd extends Struct.CollectionTypeSchema {
  collectionName: 'ads';
  info: {
    displayName: 'Ad';
    pluralName: 'ads';
    singularName: 'ad';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ad: Schema.Attribute.DynamicZone<['block.ads']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::ad.ad'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdshorizontalAdshorizontal
  extends Struct.CollectionTypeSchema {
  collectionName: 'adshorizontals';
  info: {
    displayName: 'Adshorizontal';
    pluralName: 'adshorizontals';
    singularName: 'adshorizontal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imagem: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::adshorizontal.adshorizontal'
    > &
      Schema.Attribute.Private;
    partilhar: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdsverticalAdsvertical extends Struct.CollectionTypeSchema {
  collectionName: 'adsverticals';
  info: {
    displayName: 'Adsvertical';
    pluralName: 'adsverticals';
    singularName: 'adsvertical';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imagem: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::adsvertical.adsvertical'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: 'Create your blog content';
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: 'Create authors for your content';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBannerHeroBannerHero extends Struct.CollectionTypeSchema {
  collectionName: 'banner_heroes';
  info: {
    displayName: 'Slider Hero';
    pluralName: 'banner-heroes';
    singularName: 'banner-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::banner-hero.banner-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBioBio extends Struct.CollectionTypeSchema {
  collectionName: 'bios';
  info: {
    displayName: 'Bio';
    pluralName: 'bios';
    singularName: 'bio';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::bio.bio'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: 'Organize your content into categories';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiComentarioComentario extends Struct.CollectionTypeSchema {
  collectionName: 'comentarios';
  info: {
    displayName: 'Comentario';
    pluralName: 'comentarios';
    singularName: 'comentario';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    autor: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    evento: Schema.Attribute.Relation<'manyToOne', 'api::evento.evento'>;
    eventoId: Schema.Attribute.Integer;
    exploreNossoUniverso: Schema.Attribute.Relation<
      'manyToOne',
      'api::explore-nosso-universo.explore-nosso-universo'
    >;
    heroes: Schema.Attribute.Relation<'manyToOne', 'api::heroes.heroes'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    > &
      Schema.Attribute.Private;
    momentosImpactantes: Schema.Attribute.Relation<
      'manyToOne',
      'api::momentos-impactantes.momentos-impactantes'
    >;
    momentosQueMarcaram: Schema.Attribute.Relation<
      'manyToOne',
      'api::momentos-que-marcaram.momentos-que-marcaram'
    >;
    noticia: Schema.Attribute.Relation<
      'manyToOne',
      'api::noticiaprincipal.noticiaprincipal'
    >;
    noticiaId: Schema.Attribute.Integer;
    parent: Schema.Attribute.Relation<
      'manyToOne',
      'api::comentario.comentario'
    >;
    podcaste: Schema.Attribute.Relation<'manyToOne', 'api::podcaste.podcaste'>;
    publicado: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    quemSomos: Schema.Attribute.Relation<
      'manyToOne',
      'api::quem-somos.quem-somos'
    >;
    texto: Schema.Attribute.Text;
    ultimosEpisodios: Schema.Attribute.Relation<
      'manyToOne',
      'api::ultimos-episodios.ultimos-episodios'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workshop: Schema.Attribute.Relation<'manyToOne', 'api::workshop.workshop'>;
  };
}

export interface ApiContactoContacto extends Struct.CollectionTypeSchema {
  collectionName: 'contactos';
  info: {
    displayName: 'Contacto';
    pluralName: 'contactos';
    singularName: 'contacto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contacto: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    heroImagembackground: Schema.Attribute.Media<'images'>;
    linhaDiretaContacto: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizacao: Schema.Attribute.Text;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contacto.contacto'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsapp: Schema.Attribute.Text;
  };
}

export interface ApiCoordenadaBancariaCoordenadaBancaria
  extends Struct.CollectionTypeSchema {
  collectionName: 'coordenadas_bancarias';
  info: {
    displayName: 'Coordenadas Bancarias';
    pluralName: 'coordenadas-bancarias';
    singularName: 'coordenada-bancaria';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bandeiraPaisImagem: Schema.Attribute.Media<'images'>;
    contactoWhatsapp: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documentoIdEvento: Schema.Attribute.Text;
    eventoTitulo: Schema.Attribute.Text;
    ibanConta: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::coordenada-bancaria.coordenada-bancaria'
    > &
      Schema.Attribute.Private;
    nomeBanco: Schema.Attribute.Text;
    nomeConta: Schema.Attribute.Text;
    nomePais: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoacaoBannerDoacaoBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'doacao_banners';
  info: {
    displayName: 'Doacao Banner';
    pluralName: 'doacao-banners';
    singularName: 'doacao-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    imagemMobile: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doacao-banner.doacao-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoacaoFormaContribuicaoDoacaoFormaContribuicao
  extends Struct.CollectionTypeSchema {
  collectionName: 'doacao_forma_contribuicaos';
  info: {
    displayName: 'Doacao Forma Contribuicao';
    pluralName: 'doacao-forma-contribuicaos';
    singularName: 'doacao-forma-contribuicao';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doacao-forma-contribuicao.doacao-forma-contribuicao'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoacaoHeroDoacaoHero extends Struct.CollectionTypeSchema {
  collectionName: 'doacao_heroes';
  info: {
    displayName: 'Doacao Hero';
    pluralName: 'doacao-heroes';
    singularName: 'doacao-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doacao-hero.doacao-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoacaoOndeInvestirDoacaoOndeInvestir
  extends Struct.CollectionTypeSchema {
  collectionName: 'doacao_onde_investirs';
  info: {
    displayName: 'Doacao Onde Investir';
    pluralName: 'doacao-onde-investirs';
    singularName: 'doacao-onde-investir';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doacao-onde-investir.doacao-onde-investir'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoacaoDoacao extends Struct.CollectionTypeSchema {
  collectionName: 'doacaos';
  info: {
    displayName: 'Doacao';
    pluralName: 'doacaos';
    singularName: 'doacao';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bannerhome: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    local: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doacao.doacao'
    > &
      Schema.Attribute.Private;
    necessidade: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.Text;
    titulocabecalho: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valor: Schema.Attribute.Text;
  };
}

export interface ApiDoepodfebanerDoepodfebaner
  extends Struct.CollectionTypeSchema {
  collectionName: 'doepodfebaners';
  info: {
    displayName: 'doepodfe';
    pluralName: 'doepodfebaners';
    singularName: 'doepodfebaner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.String;
    imagemBanner: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doepodfebaner.doepodfebaner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEpisodiosrecenteEpisodiosrecente
  extends Struct.CollectionTypeSchema {
  collectionName: 'episodiosrecentes';
  info: {
    displayName: 'Episodiosrecente';
    pluralName: 'episodiosrecentes';
    singularName: 'episodiosrecente';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::episodiosrecente.episodiosrecente'
    > &
      Schema.Attribute.Private;
    partilhar: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEquipaEquipa extends Struct.CollectionTypeSchema {
  collectionName: 'equipas';
  info: {
    displayName: 'equipa';
    pluralName: 'equipas';
    singularName: 'equipa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    linkfacebook: Schema.Attribute.String;
    linkind: Schema.Attribute.String;
    linkinstagram: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::equipa.equipa'
    > &
      Schema.Attribute.Private;
    nome: Schema.Attribute.String;
    ocupacao: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventoEvento extends Struct.CollectionTypeSchema {
  collectionName: 'eventos';
  info: {
    displayName: 'Evento';
    pluralName: 'eventos';
    singularName: 'evento';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    capacidade: Schema.Attribute.Integer;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    contato: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    horas: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    like: Schema.Attribute.Integer;
    local: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::evento.evento'
    > &
      Schema.Attribute.Private;
    notacao: Schema.Attribute.String;
    preco: Schema.Attribute.Decimal;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventoshomebanerEventoshomebaner
  extends Struct.CollectionTypeSchema {
  collectionName: 'eventoshomebaners';
  info: {
    displayName: 'Eventoshomebaner';
    pluralName: 'eventoshomebaners';
    singularName: 'eventoshomebaner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    horas: Schema.Attribute.Time;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eventoshomebaner.eventoshomebaner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventoshomesliderEventoshomeslider
  extends Struct.CollectionTypeSchema {
  collectionName: 'eventoshomesliders';
  info: {
    displayName: 'EventosProximos';
    pluralName: 'eventoshomesliders';
    singularName: 'eventoshomeslider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoria: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    horas: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizacao: Schema.Attribute.Text;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eventoshomeslider.eventoshomeslider'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventosprimarioEventosprimario
  extends Struct.CollectionTypeSchema {
  collectionName: 'eventosprimarios';
  info: {
    displayName: 'Eventosprimario';
    pluralName: 'eventosprimarios';
    singularName: 'eventosprimario';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    horas: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eventosprimario.eventosprimario'
    > &
      Schema.Attribute.Private;
    partilhar: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreNossoUniversoExploreNossoUniverso
  extends Struct.CollectionTypeSchema {
  collectionName: 'explore_nosso_universos';
  info: {
    displayName: 'ExploreNossoUniverso';
    pluralName: 'explore-nosso-universos';
    singularName: 'explore-nosso-universo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore-nosso-universo.explore-nosso-universo'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiFaleConoscoFaleConosco extends Struct.CollectionTypeSchema {
  collectionName: 'fale_conoscos';
  info: {
    displayName: 'Fale Conosco';
    pluralName: 'fale-conoscos';
    singularName: 'fale-conosco';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assunto: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    departamento: Schema.Attribute.Enumeration<
      ['Eventos', 'Midia', 'Parceria', 'Voluntariado', 'Suporte t\u00E9cnico']
    >;
    email: Schema.Attribute.Email;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fale-conosco.fale-conosco'
    > &
      Schema.Attribute.Private;
    mensagem: Schema.Attribute.Text;
    nome: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsapp: Schema.Attribute.Text;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    defaultSeo: Schema.Attribute.Component<'shared.seo', false>;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    siteDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeroesHeroes extends Struct.CollectionTypeSchema {
  collectionName: 'heroess';
  info: {
    displayName: 'Heroes';
    pluralName: 'heroess';
    singularName: 'heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::heroes.heroes'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    displayName: 'Home page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CarouselHero: Schema.Attribute.DynamicZone<['block.hero-section']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    menu: Schema.Attribute.Relation<'oneToOne', 'api::menu.menu'>;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHome extends Struct.CollectionTypeSchema {
  collectionName: 'homes';
  info: {
    displayName: 'home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    carousel: Schema.Attribute.DynamicZone<['block.hero-section']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIndicativosPodfeIndicativosPodfe
  extends Struct.CollectionTypeSchema {
  collectionName: 'indicativos_podfes';
  info: {
    displayName: 'Indicativos Podfe';
    pluralName: 'indicativos-podfes';
    singularName: 'indicativos-podfe';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accoesSociais: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    episodios: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::indicativos-podfe.indicativos-podfe'
    > &
      Schema.Attribute.Private;
    paises: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vidasImpactadas: Schema.Attribute.Integer;
  };
}

export interface ApiMenuMenu extends Struct.CollectionTypeSchema {
  collectionName: 'menus';
  info: {
    displayName: 'menu';
    pluralName: 'menus';
    singularName: 'menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::menu.menu'> &
      Schema.Attribute.Private;
    order: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMomentosImpactantesMomentosImpactantes
  extends Struct.CollectionTypeSchema {
  collectionName: 'momentos_impactantess';
  info: {
    displayName: 'MomentosImpactantes';
    pluralName: 'momentos-impactantess';
    singularName: 'momentos-impactantes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::momentos-impactantes.momentos-impactantes'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiMomentosQueMarcaramMomentosQueMarcaram
  extends Struct.CollectionTypeSchema {
  collectionName: 'momentos_que_marcarams';
  info: {
    displayName: 'MomentosQueMarcaram';
    pluralName: 'momentos-que-marcarams';
    singularName: 'momentos-que-marcaram';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::momentos-que-marcaram.momentos-que-marcaram'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiNavabarNavabar extends Struct.SingleTypeSchema {
  collectionName: 'navabars';
  info: {
    displayName: 'navabar';
    pluralName: 'navabars';
    singularName: 'navabar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navabar.navabar'
    > &
      Schema.Attribute.Private;
    menu: Schema.Attribute.Relation<'oneToOne', 'api::menu.menu'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsletterNewsletter extends Struct.CollectionTypeSchema {
  collectionName: 'newsletters';
  info: {
    displayName: 'Newsletter';
    pluralName: 'newsletters';
    singularName: 'newsletter';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter.newsletter'
    > &
      Schema.Attribute.Private;
    nome: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsapp: Schema.Attribute.Text;
  };
}

export interface ApiNewsrelatedNewsrelated extends Struct.CollectionTypeSchema {
  collectionName: 'newsrelateds';
  info: {
    displayName: 'newsrelated';
    pluralName: 'newsrelateds';
    singularName: 'newsrelated';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsrelated.newsrelated'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNossosParceiroNossosParceiro
  extends Struct.CollectionTypeSchema {
  collectionName: 'nossos_parceiros';
  info: {
    displayName: 'NossosParceiro';
    pluralName: 'nossos-parceiros';
    singularName: 'nossos-parceiro';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    imagebannerbackground: Schema.Attribute.Media<'images'>;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    linkunico: Schema.Attribute.UID;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nossos-parceiro.nossos-parceiro'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNoticiaprincipalNoticiaprincipal
  extends Struct.CollectionTypeSchema {
  collectionName: 'noticiaprincipals';
  info: {
    displayName: 'Noticia';
    pluralName: 'noticiaprincipals';
    singularName: 'noticiaprincipal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    autor: Schema.Attribute.String;
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentario: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    horas: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::noticiaprincipal.noticiaprincipal'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitulo: Schema.Attribute.Text;
    tag: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNoticiasecundariaNoticiasecundaria
  extends Struct.CollectionTypeSchema {
  collectionName: 'noticiasecundarias';
  info: {
    displayName: 'Noticiasecundaria';
    pluralName: 'noticiasecundarias';
    singularName: 'noticiasecundaria';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    horas: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::noticiasecundaria.noticiasecundaria'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaparceiroPaginaparceiro
  extends Struct.CollectionTypeSchema {
  collectionName: 'paginaparceiros';
  info: {
    displayName: 'paginaparceiro';
    pluralName: 'paginaparceiros';
    singularName: 'paginaparceiro';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBotao: Schema.Attribute.String;
    ctaDescricao: Schema.Attribute.String;
    ctaTitulo: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::paginaparceiro.paginaparceiro'
    > &
      Schema.Attribute.Private;
    parceirosDescricao: Schema.Attribute.String;
    parceirositem: Schema.Attribute.DynamicZone<['parceiros.valores']>;
    parceirosTitulo: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParceiroParceiro extends Struct.CollectionTypeSchema {
  collectionName: 'parceiros';
  info: {
    displayName: 'PARCEIRO';
    pluralName: 'parceiros';
    singularName: 'parceiro';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imagem: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::parceiro.parceiro'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParceirositemParceirositem
  extends Struct.CollectionTypeSchema {
  collectionName: 'parceirositems';
  info: {
    displayName: 'parceirositem';
    pluralName: 'parceirositems';
    singularName: 'parceirositem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::parceirositem.parceirositem'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPodcastePodcaste extends Struct.CollectionTypeSchema {
  collectionName: 'podcastes';
  info: {
    displayName: 'Podcaste';
    pluralName: 'podcastes';
    singularName: 'podcaste';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagemMobile: Schema.Attribute.Media<'images'>;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::podcaste.podcaste'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiPodefeMidiaPodefeMidia extends Struct.CollectionTypeSchema {
  collectionName: 'podefe_midias';
  info: {
    displayName: 'podefeMidia';
    pluralName: 'podefe-midias';
    singularName: 'podefe-midia';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    episodios: Schema.Attribute.Integer;
    hora: Schema.Attribute.Time;
    imagem: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizacao: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::podefe-midia.podefe-midia'
    > &
      Schema.Attribute.Private;
    partilhar: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    tituloemdestaque: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPublicidadePublicidade extends Struct.CollectionTypeSchema {
  collectionName: 'publicidades';
  info: {
    displayName: 'Publicidade';
    pluralName: 'publicidades';
    singularName: 'publicidade';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    imagem: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::publicidade.publicidade'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tipobaner: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuemSomosQuemSomos extends Struct.CollectionTypeSchema {
  collectionName: 'quem_somoss';
  info: {
    displayName: 'QuemSomos';
    pluralName: 'quem-somoss';
    singularName: 'quem-somos';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::quem-somos.quem-somos'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiSobreSobre extends Struct.CollectionTypeSchema {
  collectionName: 'sobres';
  info: {
    displayName: 'Sobre';
    pluralName: 'sobres';
    singularName: 'sobre';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroImagem: Schema.Attribute.Media<'images'>;
    heroTitulo: Schema.Attribute.Text;
    impactoDescricao: Schema.Attribute.RichText;
    impactoImagem: Schema.Attribute.Media<'images'>;
    impactoTitulo: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::sobre.sobre'> &
      Schema.Attribute.Private;
    missaoDescricao: Schema.Attribute.RichText;
    missaoImagem: Schema.Attribute.Media<'images'>;
    missaoTitulo: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descricao: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUltimosEpisodiosUltimosEpisodios
  extends Struct.CollectionTypeSchema {
  collectionName: 'ultimos_episodioss';
  info: {
    displayName: 'UltimosEpisodios';
    pluralName: 'ultimos-episodioss';
    singularName: 'ultimos-episodios';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ultimos-episodios.ultimos-episodios'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface ApiVideoVideo extends Struct.CollectionTypeSchema {
  collectionName: 'videos';
  info: {
    displayName: 'Video';
    pluralName: 'videos';
    singularName: 'video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::video.video'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoExternoId: Schema.Attribute.String;
  };
}

export interface ApiWorkshopWorkshop extends Struct.CollectionTypeSchema {
  collectionName: 'workshops';
  info: {
    displayName: 'Workshop';
    pluralName: 'workshops';
    singularName: 'workshop';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloco: Schema.Attribute.String;
    categoria: Schema.Attribute.String;
    comentarios: Schema.Attribute.Relation<
      'oneToMany',
      'api::comentario.comentario'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Date;
    descricao: Schema.Attribute.Text;
    episodio: Schema.Attribute.Text;
    estatus: Schema.Attribute.String;
    facebooklink: Schema.Attribute.String;
    guest: Schema.Attribute.String;
    guestdescricao: Schema.Attribute.Text;
    guestimagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    host: Schema.Attribute.Text;
    imagemMobile: Schema.Attribute.Media<'images'>;
    imagempodecast: Schema.Attribute.Media<'images'>;
    instagramlink: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::workshop.workshop'
    > &
      Schema.Attribute.Private;
    messagem: Schema.Attribute.Text;
    notacaobiblica: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
    youtubevideoid: Schema.Attribute.String;
    youtubevideolink: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::ad.ad': ApiAdAd;
      'api::adshorizontal.adshorizontal': ApiAdshorizontalAdshorizontal;
      'api::adsvertical.adsvertical': ApiAdsverticalAdsvertical;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::banner-hero.banner-hero': ApiBannerHeroBannerHero;
      'api::bio.bio': ApiBioBio;
      'api::category.category': ApiCategoryCategory;
      'api::comentario.comentario': ApiComentarioComentario;
      'api::contacto.contacto': ApiContactoContacto;
      'api::coordenada-bancaria.coordenada-bancaria': ApiCoordenadaBancariaCoordenadaBancaria;
      'api::doacao-banner.doacao-banner': ApiDoacaoBannerDoacaoBanner;
      'api::doacao-forma-contribuicao.doacao-forma-contribuicao': ApiDoacaoFormaContribuicaoDoacaoFormaContribuicao;
      'api::doacao-hero.doacao-hero': ApiDoacaoHeroDoacaoHero;
      'api::doacao-onde-investir.doacao-onde-investir': ApiDoacaoOndeInvestirDoacaoOndeInvestir;
      'api::doacao.doacao': ApiDoacaoDoacao;
      'api::doepodfebaner.doepodfebaner': ApiDoepodfebanerDoepodfebaner;
      'api::episodiosrecente.episodiosrecente': ApiEpisodiosrecenteEpisodiosrecente;
      'api::equipa.equipa': ApiEquipaEquipa;
      'api::evento.evento': ApiEventoEvento;
      'api::eventoshomebaner.eventoshomebaner': ApiEventoshomebanerEventoshomebaner;
      'api::eventoshomeslider.eventoshomeslider': ApiEventoshomesliderEventoshomeslider;
      'api::eventosprimario.eventosprimario': ApiEventosprimarioEventosprimario;
      'api::explore-nosso-universo.explore-nosso-universo': ApiExploreNossoUniversoExploreNossoUniverso;
      'api::fale-conosco.fale-conosco': ApiFaleConoscoFaleConosco;
      'api::global.global': ApiGlobalGlobal;
      'api::heroes.heroes': ApiHeroesHeroes;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::home.home': ApiHomeHome;
      'api::indicativos-podfe.indicativos-podfe': ApiIndicativosPodfeIndicativosPodfe;
      'api::menu.menu': ApiMenuMenu;
      'api::momentos-impactantes.momentos-impactantes': ApiMomentosImpactantesMomentosImpactantes;
      'api::momentos-que-marcaram.momentos-que-marcaram': ApiMomentosQueMarcaramMomentosQueMarcaram;
      'api::navabar.navabar': ApiNavabarNavabar;
      'api::newsletter.newsletter': ApiNewsletterNewsletter;
      'api::newsrelated.newsrelated': ApiNewsrelatedNewsrelated;
      'api::nossos-parceiro.nossos-parceiro': ApiNossosParceiroNossosParceiro;
      'api::noticiaprincipal.noticiaprincipal': ApiNoticiaprincipalNoticiaprincipal;
      'api::noticiasecundaria.noticiasecundaria': ApiNoticiasecundariaNoticiasecundaria;
      'api::paginaparceiro.paginaparceiro': ApiPaginaparceiroPaginaparceiro;
      'api::parceiro.parceiro': ApiParceiroParceiro;
      'api::parceirositem.parceirositem': ApiParceirositemParceirositem;
      'api::podcaste.podcaste': ApiPodcastePodcaste;
      'api::podefe-midia.podefe-midia': ApiPodefeMidiaPodefeMidia;
      'api::publicidade.publicidade': ApiPublicidadePublicidade;
      'api::quem-somos.quem-somos': ApiQuemSomosQuemSomos;
      'api::sobre.sobre': ApiSobreSobre;
      'api::tag.tag': ApiTagTag;
      'api::ultimos-episodios.ultimos-episodios': ApiUltimosEpisodiosUltimosEpisodios;
      'api::video.video': ApiVideoVideo;
      'api::workshop.workshop': ApiWorkshopWorkshop;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
