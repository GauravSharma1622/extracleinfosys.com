import { TabsModule } from 'ngx-tabset';
import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NotifierModule } from 'angular-notifier';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { CommunityComponent } from './components/common/community/community.component';
import { TeamComponent } from './components/common/team/team.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { HomeoneAboutComponent } from './components/pages/home-demo-one/homeone-about/homeone-about.component';
import { ServicesComponent } from './components/common/services/services.component';
import { ExperienceComponent } from './components/common/experience/experience.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeoneFeaturesComponent } from './components/pages/home-demo-one/homeone-features/homeone-features.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { HometwoAboutComponent } from './components/pages/home-demo-two/hometwo-about/hometwo-about.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HometwoFeaturesComponent } from './components/pages/home-demo-two/hometwo-features/hometwo-features.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { WhatWeDoComponent } from './components/common/what-we-do/what-we-do.component';
import { HomethreeAboutComponent } from './components/pages/home-demo-three/homethree-about/homethree-about.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { WorkPlanComponent } from './components/common/work-plan/work-plan.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { CaseStudiesPageComponent } from './components/pages/case-studies-page/case-studies-page.component';
import { CaseStudiesDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { GetQuotePageComponent } from './components/pages/get-quote-page/get-quote-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogWidgetComponent } from './components/common/blog-widget/blog-widget.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ItStaffingComponent } from './components/pages/services-details-page/it-staffing/it-staffing.component';
import { TestingQAComponent } from './components/pages/services-details-page/testing-qa/testing-qa.component';
import { ItTrainingComponent } from './components/pages/services-details-page/it-training/it-training.component';
import { DevopsServicesComponent } from './components/pages/services-details-page/devops-services/devops-services.component';
import { DevelopmentServicesComponent } from './components/pages/services-details-page/development-services/development-services.component';
import { CareerPlacementComponent } from './components/pages/services-details-page/career-placement/career-placement.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { JavaFullStackDeveloperComponent } from './components/pages/courses/java-full-stack-developer/java-full-stack-developer.component';
import { CoursePageComponent } from './components/pages/courses/course-page/course-page.component';
import { PythonComponent } from './components/pages/courses/python/python.component';
import { QualityAssuranceComponent } from './components/pages/courses/quality-assurance/quality-assurance.component';
import { DataAnalystComponent } from './components/pages/courses/data-analyst/data-analyst.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    HomeDemoThreeComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    BlogComponent,
    FunfactsComponent,
    WhyChooseUsComponent,
    CommunityComponent,
    TeamComponent,
    FaqComponent,
    FeaturesComponent,
    TestimonialsComponent,
    HomeoneAboutComponent,
    ServicesComponent,
    ExperienceComponent,
    HomeoneBannerComponent,
    HomeoneFeaturesComponent,
    HometwoBannerComponent,
    FeedbackComponent,
    HometwoAboutComponent,
    PartnerComponent,
    HometwoFeaturesComponent,
    HomethreeBannerComponent,
    WhatWeDoComponent,
    HomethreeAboutComponent,
    NotFoundComponent,
    AboutPageComponent,
    WorkPlanComponent,
    ServicesPageOneComponent,
    ServicesPageTwoComponent,
    ServicesDetailsPageComponent,
    HowItWorksComponent,
    PricingComponent,
    CaseStudiesPageComponent,
    CaseStudiesDetailsPageComponent,
    TeamPageComponent,
    GetQuotePageComponent,
    PricingPageComponent,
    FaqPageComponent,
    ProfileAuthenticationPageComponent,
    ForgotPasswordPageComponent,
    PrivacyPolicyPageComponent,
    TermsConditionsPageComponent,
    ContactPageComponent,
    BlogGridPageComponent,
    BlogLeftSidebarPageComponent,
    BlogRightSidebarPageComponent,
    BlogDetailsPageComponent,
    BlogWidgetComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductsDetailsPageComponent,
    ItStaffingComponent,
    TestingQAComponent,
    ItTrainingComponent,
    DevopsServicesComponent,
    DevelopmentServicesComponent,
    CareerPlacementComponent,
    CoursesComponent,
    JavaFullStackDeveloperComponent,
    CoursePageComponent,
    PythonComponent,
    QualityAssuranceComponent,
    DataAnalystComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    AccordionModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    NgxSmartModalModule.forRoot(),
    StickyNavModule,
    TabsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    NotifierModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
