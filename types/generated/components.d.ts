import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutKanooGroup extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_kanoo_groups';
  info: {
    displayName: 'About Kanoo Group';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_us_sections';
  info: {
    displayName: 'About Us Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_benefits_sections';
  info: {
    displayName: 'Benefits Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBenefitsSectionWithPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_benefits_section_with_points';
  info: {
    displayName: 'Benefits Section with Points';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'elements.label', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBrandHighlightSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brand_highlight_sections';
  info: {
    displayName: 'Brand Highlight Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brands_sections';
  info: {
    displayName: 'Brands Section';
  };
  attributes: {
    brands: Schema.Attribute.Component<'elements.brand-card', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBusinessUnitsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_business_units_sections';
  info: {
    displayName: 'Business Units Section';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.unit-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBuyingGuideSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buying_guide_sections';
  info: {
    displayName: 'Buying Guide Section';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksCertificationSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_certification_sections';
  info: {
    displayName: 'Certification Section';
  };
  attributes: {
    certificates: Schema.Attribute.Component<'elements.certificate', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksContactDetailsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_details_sections';
  info: {
    displayName: 'Contact Details Section';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whatsapp: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCraneSelectorSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_crane_selector_sections';
  info: {
    displayName: 'Crane Selector Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksCraneSeriesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_crane_series_sections';
  info: {
    displayName: 'Crane Series Section';
  };
  attributes: {
    crane_series: Schema.Attribute.Component<'elements.table-details', false>;
    custom_table: Schema.Attribute.Component<
      'elements.custom-table-section',
      true
    >;
    table: Schema.Attribute.Component<'blocks.table-section', true>;
  };
}

export interface BlocksDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_download_sections';
  info: {
    displayName: 'Download Section';
  };
  attributes: {
    resources: Schema.Attribute.Component<'elements.download-card', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksEngineeringApproachSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_engineering_approach_sections';
  info: {
    displayName: 'Engineering Approach Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksEngineeringServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_engineering_services';
  info: {
    displayName: 'Engineering Services';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksEngineeringSolutionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_engineering_solution_sections';
  info: {
    displayName: 'Engineering Solution Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    details: Schema.Attribute.Component<'elements.es-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    engineering_solution_info: Schema.Attribute.Component<
      'elements.engineer-solution-info',
      false
    >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksEngineeringSupportSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_engineering_support_sections';
  info: {
    displayName: 'Engineering Support Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.label', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksExpertiseSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_expertise_sections';
  info: {
    displayName: 'Expertise Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksExpertsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_experts_sections';
  info: {
    displayName: 'Experts Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    experts: Schema.Attribute.Component<'elements.expert-card', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksFeaturedModelsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_models_sections';
  info: {
    displayName: 'Featured Models Section';
  };
  attributes: {
    models: Schema.Attribute.Relation<'oneToMany', 'api::model.model'>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksFeaturedProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_products_sections';
  info: {
    displayName: 'Featured Projects Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Component<'elements.projects', true>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksFilterSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_filter_sections';
  info: {
    displayName: 'Filter Section';
  };
  attributes: {
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksFooterCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footer_cta_sections';
  info: {
    displayName: 'Footer CTA Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFormSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_form_sections';
  info: {
    displayName: 'Form Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    form_description: Schema.Attribute.Text & Schema.Attribute.Required;
    form_title: Schema.Attribute.String & Schema.Attribute.Required;
    headquater: Schema.Attribute.String & Schema.Attribute.Required;
    headquater_address: Schema.Attribute.String & Schema.Attribute.Required;
    headquater_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    phone1: Schema.Attribute.String & Schema.Attribute.Required;
    phone2: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    working_days: Schema.Attribute.String & Schema.Attribute.Required;
    working_hours: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_heroes';
  info: {
    displayName: 'Home Hero';
  };
  attributes: {
    background: Schema.Attribute.Component<'elements.cover', true>;
    description: Schema.Attribute.Text;
    highlights: Schema.Attribute.Component<'elements.highlight-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_industries_sections';
  info: {
    displayName: 'Industries Section';
  };
  attributes: {
    industries: Schema.Attribute.Component<'elements.industry-card', true>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logo_clouds';
  info: {
    displayName: 'Logo Cloud';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface BlocksMainModelSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_main_model_sections';
  info: {
    displayName: 'Main Model Section';
  };
  attributes: {
    best_for: Schema.Attribute.String;
    crane_capacity: Schema.Attribute.Decimal;
    crane_configuration: Schema.Attribute.String;
    hook_height: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    listingType: Schema.Attribute.Enumeration<['sale', 'rent', 'both']> &
      Schema.Attribute.Required;
    max_lifting_height: Schema.Attribute.Decimal;
    max_working_radius: Schema.Attribute.Decimal;
    model_short_name: Schema.Attribute.String & Schema.Attribute.Required;
    model_specifications: Schema.Attribute.Component<
      'elements.specifications',
      true
    >;
    overview: Schema.Attribute.Text & Schema.Attribute.Required;
    power_requirement: Schema.Attribute.Component<
      'elements.power-requirement',
      true
    >;
    short_description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_menu_items';
  info: {
    displayName: 'Menu Items';
  };
  attributes: {
    buy_cranes_menu: Schema.Attribute.Component<'elements.buy-menu', true>;
    rent_cranes_menu: Schema.Attribute.Component<'elements.rent-menu', true>;
  };
}

export interface BlocksOurSolutionsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_solutions_sections';
  info: {
    displayName: 'Our Solutions Section';
  };
  attributes: {
    our_solutions_card: Schema.Attribute.Component<
      'elements.our-solutions-card',
      true
    >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects_sections';
  info: {
    displayName: 'Projects Section';
  };
  attributes: {
    projects: Schema.Attribute.Component<'elements.project-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksRecommendedCranes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_recommended_cranes';
  info: {
    displayName: 'Recommended Cranes';
  };
  attributes: {
    models: Schema.Attribute.Relation<'oneToMany', 'api::model.model'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksRelatedModel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_related_models';
  info: {
    displayName: 'Related Model';
  };
  attributes: {
    models: Schema.Attribute.Relation<'oneToMany', 'api::model.model'>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksRelatedResources extends Struct.ComponentSchema {
  collectionName: 'components_blocks_related_resources';
  info: {
    displayName: 'Related Resources';
  };
  attributes: {
    resources: Schema.Attribute.Relation<'oneToMany', 'api::resource.resource'>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksRentalBenefitSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rental_benefit_sections';
  info: {
    displayName: 'Rental Benefit Section';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'elements.accordion', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksRentalServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rental_services_sections';
  info: {
    displayName: 'Rental Services Section';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksResourceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_resource_sections';
  info: {
    displayName: 'Resource Section';
  };
  attributes: {
    resources: Schema.Attribute.Component<'elements.resource-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksSalesCategorySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sales_category_sections';
  info: {
    displayName: 'Sales Category Section';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.brand-card', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSectionWithGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_with_grids';
  info: {
    displayName: 'Section With Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.icon-label-des', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    description: Schema.Attribute.Text;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSectionWithStickyCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_with_sticky_cards';
  info: {
    displayName: 'Section with sticky cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.icon-label-des', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSelectionGuideSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_selection_guide_sections';
  info: {
    displayName: 'Selection Guide Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSimpleHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simple_heroes';
  info: {
    displayName: 'Simple Hero';
  };
  attributes: {
    button1: Schema.Attribute.Component<'elements.link', false>;
    button2: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSimpleSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simple_sections';
  info: {
    displayName: 'Simple Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSiteSelectionSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_site_selection_sections';
  info: {
    displayName: 'Site Selection Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    site_selection_details: Schema.Attribute.Component<
      'elements.site-selection-details',
      true
    > &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false>;
  };
}

export interface BlocksTableSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_table_sections';
  info: {
    displayName: 'Table Section';
  };
  attributes: {
    en_14439_c25: Schema.Attribute.Media<'files'>;
    fem_1001: Schema.Attribute.Media<'files'>;
    maximum_load: Schema.Attribute.String;
    model: Schema.Attribute.String;
    reach: Schema.Attribute.String;
    tip_load: Schema.Attribute.String;
  };
}

export interface BlocksTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    members: Schema.Attribute.Component<'elements.team-member', true>;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true> &
      Schema.Attribute.Required;
  };
}

export interface BlocksWhyBuyFromUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_buy_from_us_sections';
  info: {
    displayName: 'Why Buy From Us Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.Required;
    tag_title: Schema.Attribute.Component<'elements.tag-title', false> &
      Schema.Attribute.Required;
  };
}

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsBrandCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_brand_cards';
  info: {
    displayName: 'Brand Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsBuyMenu extends Struct.ComponentSchema {
  collectionName: 'components_elements_buy_menus';
  info: {
    displayName: 'Buy Menu';
  };
  attributes: {
    menu: Schema.Attribute.Relation<
      'oneToOne',
      'api::category-sale.category-sale'
    >;
    sub_menus: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-sale.category-sale'
    >;
  };
}

export interface ElementsCertificate extends Struct.ComponentSchema {
  collectionName: 'components_elements_certificates';
  info: {
    displayName: 'Certificate';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContactLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_links';
  info: {
    displayName: 'Contact Link';
  };
  attributes: {
    address: Schema.Attribute.Component<'elements.link', false>;
    email: Schema.Attribute.Component<'elements.link', false>;
    phone: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsCover extends Struct.ComponentSchema {
  collectionName: 'components_elements_covers';
  info: {
    displayName: 'Cover';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    responsive_image: Schema.Attribute.Media<'images'>;
    type: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface ElementsCraneTypesListing extends Struct.ComponentSchema {
  collectionName: 'components_elements_crane_types_listings';
  info: {
    displayName: 'Crane Types Listing';
  };
  attributes: {
    crane_models: Schema.Attribute.Relation<'oneToMany', 'api::model.model'>;
    crane_type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCustomTableSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_custom_table_sections';
  info: {
    displayName: 'Custom Table Section';
  };
  attributes: {
    brochure: Schema.Attribute.Media<'files'>;
    factsheet: Schema.Attribute.Media<'files'>;
    lifting_capacity: Schema.Attribute.String;
    lifting_height: Schema.Attribute.String;
    max_lifting_height: Schema.Attribute.String;
    max_load: Schema.Attribute.String;
    max_radius: Schema.Attribute.String;
    model: Schema.Attribute.String;
    tip_load: Schema.Attribute.String;
    tower_height: Schema.Attribute.String;
  };
}

export interface ElementsDownloadCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_download_cards';
  info: {
    displayName: 'Download Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    resource: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsEngineerSolutionInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_engineer_solution_infos';
  info: {
    displayName: 'Engineer Solution Info';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    infos: Schema.Attribute.Component<'elements.label', true>;
  };
}

export interface ElementsEsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_es_cards';
  info: {
    displayName: 'ES Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsExpertCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_expert_cards';
  info: {
    displayName: 'Expert Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    mail: Schema.Attribute.Email & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooter extends Struct.ComponentSchema {
  collectionName: 'components_elements_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact_us: Schema.Attribute.Component<'elements.contact-link', false>;
    industries: Schema.Attribute.Component<'elements.footer-link', false>;
    our_services: Schema.Attribute.Component<'elements.footer-link', false>;
    quick_links: Schema.Attribute.Component<'elements.footer-link', false>;
    socials: Schema.Attribute.Component<'elements.icon-link', true>;
  };
}

export interface ElementsFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Quick Links'>;
  };
}

export interface ElementsHeader extends Struct.ComponentSchema {
  collectionName: 'components_elements_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get Quote'>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo_color: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    menu_links: Schema.Attribute.Component<'blocks.menu-items', false>;
  };
}

export interface ElementsHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_highlight_cards';
  info: {
    displayName: 'Highlight Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIconLabelDes extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_label_des';
  info: {
    displayName: 'Icon Label Des';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIconLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_links';
  info: {
    displayName: 'Icon Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_industry_cards';
  info: {
    displayName: 'Industry Card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLabel extends Struct.ComponentSchema {
  collectionName: 'components_elements_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ElementsLabelDes extends Struct.ComponentSchema {
  collectionName: 'components_elements_label_des';
  info: {
    displayName: 'Label Des';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsMenu extends Struct.ComponentSchema {
  collectionName: 'components_elements_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    menu: Schema.Attribute.Relation<
      'oneToOne',
      'api::category-rental.category-rental'
    >;
    sub_menu: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-rental.category-rental'
    >;
  };
}

export interface ElementsOurSolutionsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_our_solutions_cards';
  info: {
    displayName: 'Our Solutions Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPowerRequirement extends Struct.ComponentSchema {
  collectionName: 'components_elements_power_requirements';
  info: {
    displayName: 'Power Requirement';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'elements.three-columns', true>;
  };
}

export interface ElementsProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_project_cards';
  info: {
    displayName: 'Project Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    outcome: Schema.Attribute.String & Schema.Attribute.Required;
    solution: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProjects extends Struct.ComponentSchema {
  collectionName: 'components_elements_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.label-des', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsRentMenu extends Struct.ComponentSchema {
  collectionName: 'components_elements_rent_menus';
  info: {
    displayName: 'Rent Menu';
  };
  attributes: {
    menu: Schema.Attribute.Relation<
      'oneToOne',
      'api::category-rental.category-rental'
    >;
    sub_menus: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-rental.category-rental'
    >;
  };
}

export interface ElementsResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_resource_cards';
  info: {
    displayName: 'Resource Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSiteSelectionDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_site_selection_details';
  info: {
    displayName: 'Site Selection Details';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_elements_specifications';
  info: {
    displayName: 'Specifications';
  };
  attributes: {
    col1: Schema.Attribute.String & Schema.Attribute.Required;
    col2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTableDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_table_details';
  info: {
    displayName: 'Table Details';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    img_placement: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTagTitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_tag_titles';
  info: {
    displayName: 'Tag Title';
  };
  attributes: {
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkedin_url: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
    testimonial: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsThreeColumns extends Struct.ComponentSchema {
  collectionName: 'components_elements_three_columns';
  info: {
    displayName: 'Four Columns';
  };
  attributes: {
    col1: Schema.Attribute.String & Schema.Attribute.Required;
    col2: Schema.Attribute.String;
    col3: Schema.Attribute.String & Schema.Attribute.Required;
    col4: Schema.Attribute.String;
  };
}

export interface ElementsUnitCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_unit_cards';
  info: {
    displayName: 'Unit Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-kanoo-group': BlocksAboutKanooGroup;
      'blocks.about-us-section': BlocksAboutUsSection;
      'blocks.benefits-section': BlocksBenefitsSection;
      'blocks.benefits-section-with-points': BlocksBenefitsSectionWithPoints;
      'blocks.brand-highlight-section': BlocksBrandHighlightSection;
      'blocks.brands-section': BlocksBrandsSection;
      'blocks.business-units-section': BlocksBusinessUnitsSection;
      'blocks.buying-guide-section': BlocksBuyingGuideSection;
      'blocks.certification-section': BlocksCertificationSection;
      'blocks.contact-details-section': BlocksContactDetailsSection;
      'blocks.crane-selector-section': BlocksCraneSelectorSection;
      'blocks.crane-series-section': BlocksCraneSeriesSection;
      'blocks.download-section': BlocksDownloadSection;
      'blocks.engineering-approach-section': BlocksEngineeringApproachSection;
      'blocks.engineering-services': BlocksEngineeringServices;
      'blocks.engineering-solution-section': BlocksEngineeringSolutionSection;
      'blocks.engineering-support-section': BlocksEngineeringSupportSection;
      'blocks.expertise-section': BlocksExpertiseSection;
      'blocks.experts-section': BlocksExpertsSection;
      'blocks.featured-models-section': BlocksFeaturedModelsSection;
      'blocks.featured-products-section': BlocksFeaturedProductsSection;
      'blocks.filter-section': BlocksFilterSection;
      'blocks.footer-cta-section': BlocksFooterCtaSection;
      'blocks.form-section': BlocksFormSection;
      'blocks.gallery-section': BlocksGallerySection;
      'blocks.home-hero': BlocksHomeHero;
      'blocks.industries-section': BlocksIndustriesSection;
      'blocks.logo-cloud': BlocksLogoCloud;
      'blocks.main-model-section': BlocksMainModelSection;
      'blocks.menu-items': BlocksMenuItems;
      'blocks.our-solutions-section': BlocksOurSolutionsSection;
      'blocks.projects-section': BlocksProjectsSection;
      'blocks.recommended-cranes': BlocksRecommendedCranes;
      'blocks.related-model': BlocksRelatedModel;
      'blocks.related-resources': BlocksRelatedResources;
      'blocks.rental-benefit-section': BlocksRentalBenefitSection;
      'blocks.rental-services-section': BlocksRentalServicesSection;
      'blocks.resource-section': BlocksResourceSection;
      'blocks.sales-category-section': BlocksSalesCategorySection;
      'blocks.section-with-grid': BlocksSectionWithGrid;
      'blocks.section-with-sticky-cards': BlocksSectionWithStickyCards;
      'blocks.selection-guide-section': BlocksSelectionGuideSection;
      'blocks.simple-hero': BlocksSimpleHero;
      'blocks.simple-section': BlocksSimpleSection;
      'blocks.site-selection-section': BlocksSiteSelectionSection;
      'blocks.table-section': BlocksTableSection;
      'blocks.team-section': BlocksTeamSection;
      'blocks.testimonial-section': BlocksTestimonialSection;
      'blocks.why-buy-from-us-section': BlocksWhyBuyFromUsSection;
      'elements.accordion': ElementsAccordion;
      'elements.brand-card': ElementsBrandCard;
      'elements.buy-menu': ElementsBuyMenu;
      'elements.certificate': ElementsCertificate;
      'elements.contact-link': ElementsContactLink;
      'elements.cover': ElementsCover;
      'elements.crane-types-listing': ElementsCraneTypesListing;
      'elements.custom-table-section': ElementsCustomTableSection;
      'elements.download-card': ElementsDownloadCard;
      'elements.engineer-solution-info': ElementsEngineerSolutionInfo;
      'elements.es-card': ElementsEsCard;
      'elements.expert-card': ElementsExpertCard;
      'elements.footer': ElementsFooter;
      'elements.footer-link': ElementsFooterLink;
      'elements.header': ElementsHeader;
      'elements.highlight-card': ElementsHighlightCard;
      'elements.icon-label-des': ElementsIconLabelDes;
      'elements.icon-link': ElementsIconLink;
      'elements.industry-card': ElementsIndustryCard;
      'elements.label': ElementsLabel;
      'elements.label-des': ElementsLabelDes;
      'elements.link': ElementsLink;
      'elements.menu': ElementsMenu;
      'elements.our-solutions-card': ElementsOurSolutionsCard;
      'elements.power-requirement': ElementsPowerRequirement;
      'elements.project-card': ElementsProjectCard;
      'elements.projects': ElementsProjects;
      'elements.rent-menu': ElementsRentMenu;
      'elements.resource-card': ElementsResourceCard;
      'elements.site-selection-details': ElementsSiteSelectionDetails;
      'elements.specifications': ElementsSpecifications;
      'elements.table-details': ElementsTableDetails;
      'elements.tag-title': ElementsTagTitle;
      'elements.team-member': ElementsTeamMember;
      'elements.testimonial': ElementsTestimonial;
      'elements.three-columns': ElementsThreeColumns;
      'elements.unit-card': ElementsUnitCard;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
