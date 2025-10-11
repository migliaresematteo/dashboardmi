import {
  BasketIcon,
  CalendarIcon,
  ChartAreaIcon,
  CurrencyDollarIcon,
  LayoutDashboardIcon,
  ShoppingCartIcon,
  TableIcon,
} from "vue-tabler-icons";
export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: "Dashboard Amministrativa" },
  {
    title: "Panoramica",
    icon: LayoutDashboardIcon,
    to: "/",
    external: false,
  },
  {
    title: "Ordini Mensili",
    icon: CalendarIcon,
    to: "/ordini-mensili",
    external: false,
  },
  {
    title: "Consegne Rider",
    icon: BasketIcon,
    to: "/consegne-rider",
    external: false,
  },
  {
    title: "Consegne per CAP",
    icon: TableIcon,
    to: "/consegne-cap",
    external: false,
  },
  {
    title: "Tipologie Pagamento",
    icon: CurrencyDollarIcon,
    to: "/tipologie-pagamento",
    external: false,
  },
  {
    title: "Ordini B2B",
    icon: ShoppingCartIcon,
    to: "/ordini-b2b",
    external: false,
  },
  {
    title: "Impatto Ambientale",
    icon: ChartAreaIcon,
    to: "/impatto-ambientale",
    external: false,
  }
];
export default sidebarItem;
