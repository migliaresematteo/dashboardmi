import { LayoutDashboardIcon, CalendarIcon, BasketIcon, TableIcon, CurrencyDollarIcon, ShoppingCartIcon, ChartAreaIcon } from "vue-tabler-icons";
const sidebarItem = [
  { header: "Dashboard Amministrativa" },
  {
    title: "Panoramica",
    icon: LayoutDashboardIcon,
    to: "/",
    external: false
  },
  {
    title: "Ordini Mensili",
    icon: CalendarIcon,
    to: "/ordini-mensili",
    external: false
  },
  {
    title: "Consegne Rider",
    icon: BasketIcon,
    to: "/consegne-rider",
    external: false
  },
  {
    title: "Consegne per CAP",
    icon: TableIcon,
    to: "/consegne-cap",
    external: false
  },
  {
    title: "Tipologie Pagamento",
    icon: CurrencyDollarIcon,
    to: "/tipologie-pagamento",
    external: false
  },
  {
    title: "Ordini B2B",
    icon: ShoppingCartIcon,
    to: "/ordini-b2b",
    external: false
  },
  {
    title: "Impatto Ambientale",
    icon: ChartAreaIcon,
    to: "/impatto-ambientale",
    external: false
  }
];
export {
  sidebarItem as default
};
//# sourceMappingURL=sidebarItem.mjs.map
