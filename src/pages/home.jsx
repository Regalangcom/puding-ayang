import React, { useState } from "react";
import {
  MessageCircle,
  Star,
  MapPin,
  Mail,
  Phone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { products, testimonials, contactInfo } from "@/mock/mock.js";
import { pudding100ml, pudding200ml, image2, pudding400ml } from "@/assets";

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("all");

  const handleWhatsAppOrder = (product) => {
    const message = `Halo! Saya ingin memesan ${product.name} (${
      product.size
    }) - Rp ${product.price.toLocaleString("id-ID")}`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppContact = () => {
    const message =
      "Halo PuddingRisa! Saya ingin bertanya tentang produk Anda.";
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="md:min-h-screen bg-white">
      {/* Header Navigation */}
      {/* bg-white/90 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center"> */}
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <img
                src={image2}
                alt=""
                className="w-20 h-24  object-contain rounded-full"
              />
              {/* </div> */}
              <span className="sm:text-xs md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                PuddingRisa
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Products
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-pink-600 hover:bg-pink-700 text-white"
            >
              <MessageCircle className="w-2 h-2 mr-3" />
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section - Unique Creative Design */}
      <section
        id="home"
        className="pt-24 pb-16 px-6 relative overflow-hidden md:min-h-screen flex items-center"
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-pink-300 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-pink-400 rounded-full blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-pink-200 rounded-full blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Bento Box Grid Layout */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large Text Block - Asymmetric */}
            <div className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Badge className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Premium Homemade
                </Badge>
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
                  Puding
                  <br />
                  Susu Buah
                  <span className="block text-2xl md:text-4xl font-normal text-pink-100 mt-4">
                    Lembut & Segar ✨
                  </span>
                </h1>
                <p className="text-pink-50 text-lg md:text-xl mb-8 max-w-xl">
                  Nikmati kelembutan puding susu premium dengan kesegaran buah
                  pilihan.
                </p>
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-pink-50 shadow-xl hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan via WhatsApp
                </Button>
              </div>
            </div>

            {/* Floating Product Card 1 */}
            <div className="col-span-6 md:col-span-5 bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-pink-100 group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-pink-50 to-pink-100">
                <img
                  src={pudding100ml}
                  alt="Puding Mini"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-pink-600 text-white border-none">
                  100ml
                </Badge>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Puding Mini</h3>
              <p className="text-pink-600 font-bold text-2xl">Rp 5 K</p>
            </div>

            {/* Stats/Info Card */}
            <div className="col-span-6 md:col-span-5 bg-gradient-to-br from-pink-50 to-white rounded-3xl p-6 shadow-lg border-2 border-pink-100 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-pink-600 fill-pink-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">15 +</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Fresh Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Product Card 2 */}
            <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-pink-100 group">
              <div className="relative overflow-hidden rounded-2xl mb-3 bg-gradient-to-br from-pink-50 to-pink-100">
                <img
                  src={pudding200ml}
                  alt="Puding Regular"
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-2 right-2 bg-pink-600 text-white border-none text-xs">
                  200ml
                </Badge>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Regular</h3>
              <p className="text-pink-600 font-bold text-lg">Rp 6 K</p>
            </div>

            {/* CTA Card with Icon */}
            <div
              className="col-span-6 md:col-span-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-pink-300"
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex items-center justify-between h-full">
                <div>
                  <p className="text-sm text-pink-700 font-semibold mb-1">
                    Lihat Semua
                  </p>
                  <p className="text-2xl font-bold text-gray-900">Menu →</p>
                </div>
                <ShoppingBag className="w-12 h-12 text-pink-600" />
              </div>
            </div>

            {/* Floating Product Card 3 */}
            <div className="col-span-12 md:col-span-5 bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-pink-100 group flex items-center gap-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex-shrink-0">
                <img
                  src={pudding400ml}
                  alt="Puding Jumbo"
                  className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-2 right-2 bg-pink-600 text-white border-none text-xs">
                  400ml
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  Puding Jumbo
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Perfect untuk keluarga
                </p>
                <p className="text-pink-600 font-bold text-3xl">Rp 8K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300 mb-4">
              <ShoppingBag className="w-3 h-3 mr-1" />
              Our Menu
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pilihan{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Ukuran
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tersedia dalam berbagai ukuran untuk memenuhi kebutuhan Anda
            </p>
          </div>

          {/* Size Filter */}
          <div className="flex justify-center mb-12">
            <div className=" flex flex-col  md:rounded p-2 shadow-lg  border-pink-100 gap-2">
              <Button
                onClick={() => setSelectedSize("all")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedSize === "all"
                    ? "bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-pink-50"
                }`}
              >
                Semua Ukuran
              </Button>
              <Button
                onClick={() => setSelectedSize("100ml")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedSize === "100ml"
                    ? "bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-pink-50"
                }`}
              >
                100ml
              </Button>
              <Button
                onClick={() => setSelectedSize("120ml")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedSize === "120ml"
                    ? "bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-pink-50"
                }`}
              >
                200ml
              </Button>
              <Button
                onClick={() => setSelectedSize("400ml")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedSize === "400ml"
                    ? "bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-pink-50"
                }`}
              >
                400ml
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter(
                (product) =>
                  selectedSize === "all" || product.size === selectedSize
              )
              .map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300 overflow-hidden"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-pink-600 text-white border-none shadow-lg">
                        {product.size}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-pink-600">
                          Rp {product.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="w-full bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Pesan via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-6 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300 mb-4">
              <Star className="w-3 h-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apa Kata{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Pelanggan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimoni dan history order asli dari customer kami via WhatsApp
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="marquee-container">
              <div className="marquee-content">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="marquee-item"
                    >
                      <Card className="border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-xl bg-white w-[380px]">
                        <CardContent className="p-0">
                          {/* WhatsApp Header */}
                          <img src={testimonial.image} />

                          {/* Date Footer */}
                          <div className="px-4 py-2 bg-gray-50 border-t border-pink-100">
                            <p className="text-xs text-gray-500 text-center">
                              {testimonial.date}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300 mb-4">
              <MapPin className="w-3 h-3 mr-1" />
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hubungi{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami siap melayani pesanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-2 border-pink-100">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600">{contactInfo.whatsapp}</p>
                      <Button
                        onClick={handleWhatsAppContact}
                        variant="link"
                        className="text-pink-600 hover:text-pink-700 p-0 h-auto mt-2"
                      >
                        Chat Sekarang →
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Lokasi
                      </h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden border-4 border-pink-200 shadow-xl">
              <iframe
                src={contactInfo.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PuddingRisa Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-20 h-20   rounded-full flex items-center justify-center">
                  {/* <Sparkles className="w-6 h-6 text-white" /> */}
                  <img
                    src={image2}
                    alt=""
                    className="md:w-24 md:h-24 object-contain rounded-full"
                  />
                </div>
                <span className="text-2xl font-bold">PuddingRisa</span>
              </div>
              <p className="text-gray-400">
                Puding susu buah premium dengan cita rasa terbaik untuk keluarga
                Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {contactInfo.whatsapp}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {contactInfo.address}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 PuddingRisa. All rights reserved. Made with love for
              pudding lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
