"use client";

import OptimizedImage from "./OptimizedImage";
import ColorSwatch from "./ColorSwatch";
import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import NavbarHeader from "./Navbar/NavbarHeader";
import DrawerMenu from "./Navbar/DrawerMenu";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";
import HeroSections from "./Home/HeroSections";
import AddToCartModal from "./AddToCartModal";
import SliderArrow from "./SliderArrow";
import PaymentMethods from "./BottomNav/PaymentMethods";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import ThumbnailSlider from "./Slider";
import Loader from "./Loader";
import ProductImageGallery from "./ProductImageGallery";
import ProductActions from "./ProductActions";
import ProductReviews from "./ProductReviews";
import ProductInfo from "./ProductInfo";
import EmptyStateNotice from "./EmptyStateNotice";
import Sidebar from "./Sidebar";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import CloseButton from "./CloseButton";
import showToast from "@/lib/toast";
import useAlert from "@/hooks/useAlert";
import {
  MockJsonData,
  searchData,
  navLinks,
  product,
  socialLinks,
  supportLinks,
} from "@/data/navData";

export {
  OptimizedImage,
  ColorSwatch,
  Button,
  ProductCard,
  ProductDetail,
  NavbarHeader,
  DrawerMenu,
  CartDrawer,
  SearchBar,
  HeroSections,
  MockJsonData,
  searchData,
  navLinks,
  product,
  socialLinks,
  supportLinks,
  AddToCartModal,
  SliderArrow,
  PaymentMethods,
  SizeSelector,
  ColorSelector,
  ThumbnailSlider,
  Loader,
  ProductImageGallery,
  ProductActions,
  ProductReviews,
  ProductInfo,
  EmptyStateNotice,
  Sidebar,
  useOutsideClick,
  CloseButton,
  showToast,
  useAlert,
};