
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AuthLoginForm': typeof import("../components/auth/LoginForm.vue")['default']
    'AuthRegisterForm': typeof import("../components/auth/RegisterForm.vue")['default']
    'DashboardB2BOrders': typeof import("../components/dashboard/B2BOrders.vue")['default']
    'DashboardEnvironmentalImpact': typeof import("../components/dashboard/EnvironmentalImpact.vue")['default']
    'DashboardMonthlyEarnings': typeof import("../components/dashboard/MonthlyEarnings.vue")['default']
    'DashboardMonthlyOrders': typeof import("../components/dashboard/MonthlyOrders.vue")['default']
    'DashboardOrderDetailsModal': typeof import("../components/dashboard/OrderDetailsModal.vue")['default']
    'DashboardPaymentTypes': typeof import("../components/dashboard/PaymentTypes.vue")['default']
    'DashboardPostalCodeDeliveries': typeof import("../components/dashboard/PostalCodeDeliveries.vue")['default']
    'DashboardProductCards': typeof import("../components/dashboard/ProductCards.vue")['default']
    'DashboardProductPerformance': typeof import("../components/dashboard/ProductPerformance.vue")['default']
    'DashboardRecentTransaction': typeof import("../components/dashboard/RecentTransaction.vue")['default']
    'DashboardRiderDeliveries': typeof import("../components/dashboard/RiderDeliveries.vue")['default']
    'DashboardSalesOverview': typeof import("../components/dashboard/SalesOverview.vue")['default']
    'DashboardYearlyBreakup': typeof import("../components/dashboard/YearlyBreakup.vue")['default']
    'LayoutFullMain': typeof import("../components/layout/full/Main.vue")['default']
    'LayoutFullLogo': typeof import("../components/layout/full/logo/Logo.vue")['default']
    'LayoutFullLogoDark': typeof import("../components/layout/full/logo/LogoDark.vue")['default']
    'LayoutFullVerticalHeaderNotificationDD': typeof import("../components/layout/full/vertical-header/NotificationDD.vue")['default']
    'LayoutFullVerticalHeaderProfileDD': typeof import("../components/layout/full/vertical-header/ProfileDD.vue")['default']
    'LayoutFullVerticalSidebarDropdown': typeof import("../components/layout/full/vertical-sidebar/Dropdown/index.vue")['default']
    'LayoutFullVerticalSidebarExtraBox': typeof import("../components/layout/full/vertical-sidebar/ExtraBox/index.vue")['default']
    'LayoutFullVerticalSidebarIcon': typeof import("../components/layout/full/vertical-sidebar/Icon.vue")['default']
    'LayoutFullVerticalSidebarNavCollapse': typeof import("../components/layout/full/vertical-sidebar/NavCollapse/index.vue")['default']
    'LayoutFullVerticalSidebarNavGroup': typeof import("../components/layout/full/vertical-sidebar/NavGroup/index.vue")['default']
    'LayoutFullVerticalSidebarNavItem': typeof import("../components/layout/full/vertical-sidebar/NavItem/index.vue")['default']
    'LayoutFullVerticalSidebarItem': typeof import("../components/layout/full/vertical-sidebar/sidebarItem")['default']
    'SharedCardHeaderFooter': typeof import("../components/shared/CardHeaderFooter.vue")['default']
    'SharedUiChildCard': typeof import("../components/shared/UiChildCard.vue")['default']
    'SharedUiParentCard': typeof import("../components/shared/UiParentCard.vue")['default']
    'SharedUiTableCard': typeof import("../components/shared/UiTableCard.vue")['default']
    'SharedUiTextfieldPrimary': typeof import("../components/shared/UiTextfieldPrimary.vue")['default']
    'SharedWidgetCard': typeof import("../components/shared/WidgetCard.vue")['default']
    'SharedWidgetCardv2': typeof import("../components/shared/WidgetCardv2.vue")['default']
    'StyleComponentsShadow': typeof import("../components/style-components/shadow/Shadow.vue")['default']
    'StyleComponentsTypographyDefaultText': typeof import("../components/style-components/typography/DefaultText.vue")['default']
    'StyleComponentsTypographyHeading': typeof import("../components/style-components/typography/Heading.vue")['default']
    'UiComponentsAlertBasic': typeof import("../components/ui-components/alert/Basic.vue")['default']
    'UiComponentsAlertClosable': typeof import("../components/ui-components/alert/Closable.vue")['default']
    'UiComponentsAlertFilled': typeof import("../components/ui-components/alert/Filled.vue")['default']
    'UiComponentsButtonBaseButtons': typeof import("../components/ui-components/button/BaseButtons.vue")['default']
    'UiComponentsButtonColorsButtons': typeof import("../components/ui-components/button/ColorsButtons.vue")['default']
    'UiComponentsButtonIconColorSizes': typeof import("../components/ui-components/button/IconColorSizes.vue")['default']
    'UiComponentsButtonOutlinedButtons': typeof import("../components/ui-components/button/OutlinedButtons.vue")['default']
    'UiComponentsButtonSizeButtons': typeof import("../components/ui-components/button/SizeButtons.vue")['default']
    'UiComponentsButtonTextButtons': typeof import("../components/ui-components/button/TextButtons.vue")['default']
    'UiComponentsCardsContentWrap': typeof import("../components/ui-components/cards/CardsContentWrap.vue")['default']
    'UiComponentsCardsMedia': typeof import("../components/ui-components/cards/CardsMedia.vue")['default']
    'UiComponentsCardsProps': typeof import("../components/ui-components/cards/CardsProps.vue")['default']
    'UiComponentsCardsSlots': typeof import("../components/ui-components/cards/CardsSlots.vue")['default']
    'UiComponentsCardsTwitter': typeof import("../components/ui-components/cards/CardsTwitter.vue")['default']
    'UiComponentsCardsWeather': typeof import("../components/ui-components/cards/CardsWeather.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAuthLoginForm': LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
    'LazyAuthRegisterForm': LazyComponent<typeof import("../components/auth/RegisterForm.vue")['default']>
    'LazyDashboardB2BOrders': LazyComponent<typeof import("../components/dashboard/B2BOrders.vue")['default']>
    'LazyDashboardEnvironmentalImpact': LazyComponent<typeof import("../components/dashboard/EnvironmentalImpact.vue")['default']>
    'LazyDashboardMonthlyEarnings': LazyComponent<typeof import("../components/dashboard/MonthlyEarnings.vue")['default']>
    'LazyDashboardMonthlyOrders': LazyComponent<typeof import("../components/dashboard/MonthlyOrders.vue")['default']>
    'LazyDashboardOrderDetailsModal': LazyComponent<typeof import("../components/dashboard/OrderDetailsModal.vue")['default']>
    'LazyDashboardPaymentTypes': LazyComponent<typeof import("../components/dashboard/PaymentTypes.vue")['default']>
    'LazyDashboardPostalCodeDeliveries': LazyComponent<typeof import("../components/dashboard/PostalCodeDeliveries.vue")['default']>
    'LazyDashboardProductCards': LazyComponent<typeof import("../components/dashboard/ProductCards.vue")['default']>
    'LazyDashboardProductPerformance': LazyComponent<typeof import("../components/dashboard/ProductPerformance.vue")['default']>
    'LazyDashboardRecentTransaction': LazyComponent<typeof import("../components/dashboard/RecentTransaction.vue")['default']>
    'LazyDashboardRiderDeliveries': LazyComponent<typeof import("../components/dashboard/RiderDeliveries.vue")['default']>
    'LazyDashboardSalesOverview': LazyComponent<typeof import("../components/dashboard/SalesOverview.vue")['default']>
    'LazyDashboardYearlyBreakup': LazyComponent<typeof import("../components/dashboard/YearlyBreakup.vue")['default']>
    'LazyLayoutFullMain': LazyComponent<typeof import("../components/layout/full/Main.vue")['default']>
    'LazyLayoutFullLogo': LazyComponent<typeof import("../components/layout/full/logo/Logo.vue")['default']>
    'LazyLayoutFullLogoDark': LazyComponent<typeof import("../components/layout/full/logo/LogoDark.vue")['default']>
    'LazyLayoutFullVerticalHeaderNotificationDD': LazyComponent<typeof import("../components/layout/full/vertical-header/NotificationDD.vue")['default']>
    'LazyLayoutFullVerticalHeaderProfileDD': LazyComponent<typeof import("../components/layout/full/vertical-header/ProfileDD.vue")['default']>
    'LazyLayoutFullVerticalSidebarDropdown': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/Dropdown/index.vue")['default']>
    'LazyLayoutFullVerticalSidebarExtraBox': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/ExtraBox/index.vue")['default']>
    'LazyLayoutFullVerticalSidebarIcon': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/Icon.vue")['default']>
    'LazyLayoutFullVerticalSidebarNavCollapse': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavCollapse/index.vue")['default']>
    'LazyLayoutFullVerticalSidebarNavGroup': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavGroup/index.vue")['default']>
    'LazyLayoutFullVerticalSidebarNavItem': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavItem/index.vue")['default']>
    'LazyLayoutFullVerticalSidebarItem': LazyComponent<typeof import("../components/layout/full/vertical-sidebar/sidebarItem")['default']>
    'LazySharedCardHeaderFooter': LazyComponent<typeof import("../components/shared/CardHeaderFooter.vue")['default']>
    'LazySharedUiChildCard': LazyComponent<typeof import("../components/shared/UiChildCard.vue")['default']>
    'LazySharedUiParentCard': LazyComponent<typeof import("../components/shared/UiParentCard.vue")['default']>
    'LazySharedUiTableCard': LazyComponent<typeof import("../components/shared/UiTableCard.vue")['default']>
    'LazySharedUiTextfieldPrimary': LazyComponent<typeof import("../components/shared/UiTextfieldPrimary.vue")['default']>
    'LazySharedWidgetCard': LazyComponent<typeof import("../components/shared/WidgetCard.vue")['default']>
    'LazySharedWidgetCardv2': LazyComponent<typeof import("../components/shared/WidgetCardv2.vue")['default']>
    'LazyStyleComponentsShadow': LazyComponent<typeof import("../components/style-components/shadow/Shadow.vue")['default']>
    'LazyStyleComponentsTypographyDefaultText': LazyComponent<typeof import("../components/style-components/typography/DefaultText.vue")['default']>
    'LazyStyleComponentsTypographyHeading': LazyComponent<typeof import("../components/style-components/typography/Heading.vue")['default']>
    'LazyUiComponentsAlertBasic': LazyComponent<typeof import("../components/ui-components/alert/Basic.vue")['default']>
    'LazyUiComponentsAlertClosable': LazyComponent<typeof import("../components/ui-components/alert/Closable.vue")['default']>
    'LazyUiComponentsAlertFilled': LazyComponent<typeof import("../components/ui-components/alert/Filled.vue")['default']>
    'LazyUiComponentsButtonBaseButtons': LazyComponent<typeof import("../components/ui-components/button/BaseButtons.vue")['default']>
    'LazyUiComponentsButtonColorsButtons': LazyComponent<typeof import("../components/ui-components/button/ColorsButtons.vue")['default']>
    'LazyUiComponentsButtonIconColorSizes': LazyComponent<typeof import("../components/ui-components/button/IconColorSizes.vue")['default']>
    'LazyUiComponentsButtonOutlinedButtons': LazyComponent<typeof import("../components/ui-components/button/OutlinedButtons.vue")['default']>
    'LazyUiComponentsButtonSizeButtons': LazyComponent<typeof import("../components/ui-components/button/SizeButtons.vue")['default']>
    'LazyUiComponentsButtonTextButtons': LazyComponent<typeof import("../components/ui-components/button/TextButtons.vue")['default']>
    'LazyUiComponentsCardsContentWrap': LazyComponent<typeof import("../components/ui-components/cards/CardsContentWrap.vue")['default']>
    'LazyUiComponentsCardsMedia': LazyComponent<typeof import("../components/ui-components/cards/CardsMedia.vue")['default']>
    'LazyUiComponentsCardsProps': LazyComponent<typeof import("../components/ui-components/cards/CardsProps.vue")['default']>
    'LazyUiComponentsCardsSlots': LazyComponent<typeof import("../components/ui-components/cards/CardsSlots.vue")['default']>
    'LazyUiComponentsCardsTwitter': LazyComponent<typeof import("../components/ui-components/cards/CardsTwitter.vue")['default']>
    'LazyUiComponentsCardsWeather': LazyComponent<typeof import("../components/ui-components/cards/CardsWeather.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AuthLoginForm: typeof import("../components/auth/LoginForm.vue")['default']
export const AuthRegisterForm: typeof import("../components/auth/RegisterForm.vue")['default']
export const DashboardB2BOrders: typeof import("../components/dashboard/B2BOrders.vue")['default']
export const DashboardEnvironmentalImpact: typeof import("../components/dashboard/EnvironmentalImpact.vue")['default']
export const DashboardMonthlyEarnings: typeof import("../components/dashboard/MonthlyEarnings.vue")['default']
export const DashboardMonthlyOrders: typeof import("../components/dashboard/MonthlyOrders.vue")['default']
export const DashboardOrderDetailsModal: typeof import("../components/dashboard/OrderDetailsModal.vue")['default']
export const DashboardPaymentTypes: typeof import("../components/dashboard/PaymentTypes.vue")['default']
export const DashboardPostalCodeDeliveries: typeof import("../components/dashboard/PostalCodeDeliveries.vue")['default']
export const DashboardProductCards: typeof import("../components/dashboard/ProductCards.vue")['default']
export const DashboardProductPerformance: typeof import("../components/dashboard/ProductPerformance.vue")['default']
export const DashboardRecentTransaction: typeof import("../components/dashboard/RecentTransaction.vue")['default']
export const DashboardRiderDeliveries: typeof import("../components/dashboard/RiderDeliveries.vue")['default']
export const DashboardSalesOverview: typeof import("../components/dashboard/SalesOverview.vue")['default']
export const DashboardYearlyBreakup: typeof import("../components/dashboard/YearlyBreakup.vue")['default']
export const LayoutFullMain: typeof import("../components/layout/full/Main.vue")['default']
export const LayoutFullLogo: typeof import("../components/layout/full/logo/Logo.vue")['default']
export const LayoutFullLogoDark: typeof import("../components/layout/full/logo/LogoDark.vue")['default']
export const LayoutFullVerticalHeaderNotificationDD: typeof import("../components/layout/full/vertical-header/NotificationDD.vue")['default']
export const LayoutFullVerticalHeaderProfileDD: typeof import("../components/layout/full/vertical-header/ProfileDD.vue")['default']
export const LayoutFullVerticalSidebarDropdown: typeof import("../components/layout/full/vertical-sidebar/Dropdown/index.vue")['default']
export const LayoutFullVerticalSidebarExtraBox: typeof import("../components/layout/full/vertical-sidebar/ExtraBox/index.vue")['default']
export const LayoutFullVerticalSidebarIcon: typeof import("../components/layout/full/vertical-sidebar/Icon.vue")['default']
export const LayoutFullVerticalSidebarNavCollapse: typeof import("../components/layout/full/vertical-sidebar/NavCollapse/index.vue")['default']
export const LayoutFullVerticalSidebarNavGroup: typeof import("../components/layout/full/vertical-sidebar/NavGroup/index.vue")['default']
export const LayoutFullVerticalSidebarNavItem: typeof import("../components/layout/full/vertical-sidebar/NavItem/index.vue")['default']
export const LayoutFullVerticalSidebarItem: typeof import("../components/layout/full/vertical-sidebar/sidebarItem")['default']
export const SharedCardHeaderFooter: typeof import("../components/shared/CardHeaderFooter.vue")['default']
export const SharedUiChildCard: typeof import("../components/shared/UiChildCard.vue")['default']
export const SharedUiParentCard: typeof import("../components/shared/UiParentCard.vue")['default']
export const SharedUiTableCard: typeof import("../components/shared/UiTableCard.vue")['default']
export const SharedUiTextfieldPrimary: typeof import("../components/shared/UiTextfieldPrimary.vue")['default']
export const SharedWidgetCard: typeof import("../components/shared/WidgetCard.vue")['default']
export const SharedWidgetCardv2: typeof import("../components/shared/WidgetCardv2.vue")['default']
export const StyleComponentsShadow: typeof import("../components/style-components/shadow/Shadow.vue")['default']
export const StyleComponentsTypographyDefaultText: typeof import("../components/style-components/typography/DefaultText.vue")['default']
export const StyleComponentsTypographyHeading: typeof import("../components/style-components/typography/Heading.vue")['default']
export const UiComponentsAlertBasic: typeof import("../components/ui-components/alert/Basic.vue")['default']
export const UiComponentsAlertClosable: typeof import("../components/ui-components/alert/Closable.vue")['default']
export const UiComponentsAlertFilled: typeof import("../components/ui-components/alert/Filled.vue")['default']
export const UiComponentsButtonBaseButtons: typeof import("../components/ui-components/button/BaseButtons.vue")['default']
export const UiComponentsButtonColorsButtons: typeof import("../components/ui-components/button/ColorsButtons.vue")['default']
export const UiComponentsButtonIconColorSizes: typeof import("../components/ui-components/button/IconColorSizes.vue")['default']
export const UiComponentsButtonOutlinedButtons: typeof import("../components/ui-components/button/OutlinedButtons.vue")['default']
export const UiComponentsButtonSizeButtons: typeof import("../components/ui-components/button/SizeButtons.vue")['default']
export const UiComponentsButtonTextButtons: typeof import("../components/ui-components/button/TextButtons.vue")['default']
export const UiComponentsCardsContentWrap: typeof import("../components/ui-components/cards/CardsContentWrap.vue")['default']
export const UiComponentsCardsMedia: typeof import("../components/ui-components/cards/CardsMedia.vue")['default']
export const UiComponentsCardsProps: typeof import("../components/ui-components/cards/CardsProps.vue")['default']
export const UiComponentsCardsSlots: typeof import("../components/ui-components/cards/CardsSlots.vue")['default']
export const UiComponentsCardsTwitter: typeof import("../components/ui-components/cards/CardsTwitter.vue")['default']
export const UiComponentsCardsWeather: typeof import("../components/ui-components/cards/CardsWeather.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAuthLoginForm: LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
export const LazyAuthRegisterForm: LazyComponent<typeof import("../components/auth/RegisterForm.vue")['default']>
export const LazyDashboardB2BOrders: LazyComponent<typeof import("../components/dashboard/B2BOrders.vue")['default']>
export const LazyDashboardEnvironmentalImpact: LazyComponent<typeof import("../components/dashboard/EnvironmentalImpact.vue")['default']>
export const LazyDashboardMonthlyEarnings: LazyComponent<typeof import("../components/dashboard/MonthlyEarnings.vue")['default']>
export const LazyDashboardMonthlyOrders: LazyComponent<typeof import("../components/dashboard/MonthlyOrders.vue")['default']>
export const LazyDashboardOrderDetailsModal: LazyComponent<typeof import("../components/dashboard/OrderDetailsModal.vue")['default']>
export const LazyDashboardPaymentTypes: LazyComponent<typeof import("../components/dashboard/PaymentTypes.vue")['default']>
export const LazyDashboardPostalCodeDeliveries: LazyComponent<typeof import("../components/dashboard/PostalCodeDeliveries.vue")['default']>
export const LazyDashboardProductCards: LazyComponent<typeof import("../components/dashboard/ProductCards.vue")['default']>
export const LazyDashboardProductPerformance: LazyComponent<typeof import("../components/dashboard/ProductPerformance.vue")['default']>
export const LazyDashboardRecentTransaction: LazyComponent<typeof import("../components/dashboard/RecentTransaction.vue")['default']>
export const LazyDashboardRiderDeliveries: LazyComponent<typeof import("../components/dashboard/RiderDeliveries.vue")['default']>
export const LazyDashboardSalesOverview: LazyComponent<typeof import("../components/dashboard/SalesOverview.vue")['default']>
export const LazyDashboardYearlyBreakup: LazyComponent<typeof import("../components/dashboard/YearlyBreakup.vue")['default']>
export const LazyLayoutFullMain: LazyComponent<typeof import("../components/layout/full/Main.vue")['default']>
export const LazyLayoutFullLogo: LazyComponent<typeof import("../components/layout/full/logo/Logo.vue")['default']>
export const LazyLayoutFullLogoDark: LazyComponent<typeof import("../components/layout/full/logo/LogoDark.vue")['default']>
export const LazyLayoutFullVerticalHeaderNotificationDD: LazyComponent<typeof import("../components/layout/full/vertical-header/NotificationDD.vue")['default']>
export const LazyLayoutFullVerticalHeaderProfileDD: LazyComponent<typeof import("../components/layout/full/vertical-header/ProfileDD.vue")['default']>
export const LazyLayoutFullVerticalSidebarDropdown: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/Dropdown/index.vue")['default']>
export const LazyLayoutFullVerticalSidebarExtraBox: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/ExtraBox/index.vue")['default']>
export const LazyLayoutFullVerticalSidebarIcon: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/Icon.vue")['default']>
export const LazyLayoutFullVerticalSidebarNavCollapse: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavCollapse/index.vue")['default']>
export const LazyLayoutFullVerticalSidebarNavGroup: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavGroup/index.vue")['default']>
export const LazyLayoutFullVerticalSidebarNavItem: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/NavItem/index.vue")['default']>
export const LazyLayoutFullVerticalSidebarItem: LazyComponent<typeof import("../components/layout/full/vertical-sidebar/sidebarItem")['default']>
export const LazySharedCardHeaderFooter: LazyComponent<typeof import("../components/shared/CardHeaderFooter.vue")['default']>
export const LazySharedUiChildCard: LazyComponent<typeof import("../components/shared/UiChildCard.vue")['default']>
export const LazySharedUiParentCard: LazyComponent<typeof import("../components/shared/UiParentCard.vue")['default']>
export const LazySharedUiTableCard: LazyComponent<typeof import("../components/shared/UiTableCard.vue")['default']>
export const LazySharedUiTextfieldPrimary: LazyComponent<typeof import("../components/shared/UiTextfieldPrimary.vue")['default']>
export const LazySharedWidgetCard: LazyComponent<typeof import("../components/shared/WidgetCard.vue")['default']>
export const LazySharedWidgetCardv2: LazyComponent<typeof import("../components/shared/WidgetCardv2.vue")['default']>
export const LazyStyleComponentsShadow: LazyComponent<typeof import("../components/style-components/shadow/Shadow.vue")['default']>
export const LazyStyleComponentsTypographyDefaultText: LazyComponent<typeof import("../components/style-components/typography/DefaultText.vue")['default']>
export const LazyStyleComponentsTypographyHeading: LazyComponent<typeof import("../components/style-components/typography/Heading.vue")['default']>
export const LazyUiComponentsAlertBasic: LazyComponent<typeof import("../components/ui-components/alert/Basic.vue")['default']>
export const LazyUiComponentsAlertClosable: LazyComponent<typeof import("../components/ui-components/alert/Closable.vue")['default']>
export const LazyUiComponentsAlertFilled: LazyComponent<typeof import("../components/ui-components/alert/Filled.vue")['default']>
export const LazyUiComponentsButtonBaseButtons: LazyComponent<typeof import("../components/ui-components/button/BaseButtons.vue")['default']>
export const LazyUiComponentsButtonColorsButtons: LazyComponent<typeof import("../components/ui-components/button/ColorsButtons.vue")['default']>
export const LazyUiComponentsButtonIconColorSizes: LazyComponent<typeof import("../components/ui-components/button/IconColorSizes.vue")['default']>
export const LazyUiComponentsButtonOutlinedButtons: LazyComponent<typeof import("../components/ui-components/button/OutlinedButtons.vue")['default']>
export const LazyUiComponentsButtonSizeButtons: LazyComponent<typeof import("../components/ui-components/button/SizeButtons.vue")['default']>
export const LazyUiComponentsButtonTextButtons: LazyComponent<typeof import("../components/ui-components/button/TextButtons.vue")['default']>
export const LazyUiComponentsCardsContentWrap: LazyComponent<typeof import("../components/ui-components/cards/CardsContentWrap.vue")['default']>
export const LazyUiComponentsCardsMedia: LazyComponent<typeof import("../components/ui-components/cards/CardsMedia.vue")['default']>
export const LazyUiComponentsCardsProps: LazyComponent<typeof import("../components/ui-components/cards/CardsProps.vue")['default']>
export const LazyUiComponentsCardsSlots: LazyComponent<typeof import("../components/ui-components/cards/CardsSlots.vue")['default']>
export const LazyUiComponentsCardsTwitter: LazyComponent<typeof import("../components/ui-components/cards/CardsTwitter.vue")['default']>
export const LazyUiComponentsCardsWeather: LazyComponent<typeof import("../components/ui-components/cards/CardsWeather.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
