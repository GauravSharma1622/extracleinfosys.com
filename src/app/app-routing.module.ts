import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CaseStudiesDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
import { CaseStudiesPageComponent } from './components/pages/case-studies-page/case-studies-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CoursePageComponent } from './components/pages/courses/course-page/course-page.component';
import { DataAnalystComponent } from './components/pages/courses/data-analyst/data-analyst.component';
import { JavaFullStackDeveloperComponent } from './components/pages/courses/java-full-stack-developer/java-full-stack-developer.component';
import { PythonComponent } from './components/pages/courses/python/python.component';
import { QualityAssuranceComponent } from './components/pages/courses/quality-assurance/quality-assurance.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { GetQuotePageComponent } from './components/pages/get-quote-page/get-quote-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { CareerPlacementComponent } from './components/pages/services-details-page/career-placement/career-placement.component';
import { DevelopmentServicesComponent } from './components/pages/services-details-page/development-services/development-services.component';
import { DevopsServicesComponent } from './components/pages/services-details-page/devops-services/devops-services.component';
import { ItStaffingComponent } from './components/pages/services-details-page/it-staffing/it-staffing.component';
import { ItTrainingComponent } from './components/pages/services-details-page/it-training/it-training.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { TestingQAComponent } from './components/pages/services-details-page/testing-qa/testing-qa.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'index-2', pathMatch: 'full' },
  { path: 'index-2', component: HomeDemoTwoComponent },
  { path: 'index-3', component: HomeDemoThreeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageOneComponent },
  { path: 'services-2', component: ServicesPageTwoComponent },
  { path: 'services-details', component: ServicesDetailsPageComponent },
  { path: 'portfolio', component: CaseStudiesPageComponent },
  { path: 'portfolio-details', component: CaseStudiesDetailsPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'get-quote', component: GetQuotePageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'product/:slug', component: ProductsDetailsPageComponent },
  { path: 'profile-authentication', component: ProfileAuthenticationPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'terms-conditions', component: TermsConditionsPageComponent },
  { path: 'blog-grid', component: BlogGridPageComponent },
  { path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent },
  { path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent },
  { path: 'blog-details', component: BlogDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // Here add new pages component
  { path: 'it-staffing-and-consulting', component: ItStaffingComponent },
  { path: 'testing-and-qa', component: TestingQAComponent },
  { path: 'it-training-services', component: ItTrainingComponent },
  { path: 'devops-services', component: DevopsServicesComponent },
  { path: 'development-services', component: DevelopmentServicesComponent },
  { path: 'career-placement', component: CareerPlacementComponent },
  { path: 'courses', component: CoursePageComponent },
  { path: 'java-full-stack-developer', component: JavaFullStackDeveloperComponent },
  { path: 'python', component: PythonComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },
  { path: 'data-analyst', component: DataAnalystComponent },

  { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
