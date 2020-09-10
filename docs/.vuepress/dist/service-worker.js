/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c5aaa702aa2117b113324414dd0123ca"
  },
  {
    "url": "advanced/create_payment_method.html",
    "revision": "79ef2cf362a055c574f789e25c3a5f1a"
  },
  {
    "url": "advanced/create_shipping_method.html",
    "revision": "26e3bf9f3331b98a0ff7a59c87e3eaf3"
  },
  {
    "url": "advanced/datagrid.html",
    "revision": "a7848518fac14ce2698555a8c0dd8368"
  },
  {
    "url": "advanced/events.html",
    "revision": "5f9a6479ec083d89b76b06ee7e8a5087"
  },
  {
    "url": "advanced/index.html",
    "revision": "8abee1e98fb37ca205ffa194927a5a82"
  },
  {
    "url": "advanced/override-core-model.html",
    "revision": "92d4150287894ae734b3f15c7215408d"
  },
  {
    "url": "advanced/render_event.html",
    "revision": "64c65437329fef58e53a96c823f2e927"
  },
  {
    "url": "advanced/security_practice.html",
    "revision": "be2238029864f6cedcefb60919c9ab3d"
  },
  {
    "url": "api/cart.html",
    "revision": "10e040ab856d20cb6ba4d038d686c40a"
  },
  {
    "url": "api/categories.html",
    "revision": "8da964a86abb8c2723de05f966c0eace"
  },
  {
    "url": "api/customer_addresses.html",
    "revision": "f2fcfadf61c2d74a70887e9f85ca0616"
  },
  {
    "url": "api/customer_review.html",
    "revision": "4ffaa9c58b61b8cfd2ec9ef96f1d9652"
  },
  {
    "url": "api/customer_wishlist.html",
    "revision": "3a9507e5c819766aaab63a012ad9372b"
  },
  {
    "url": "api/customers.html",
    "revision": "75861bda10ce38756c7a9ceedf60dcf4"
  },
  {
    "url": "api/index.html",
    "revision": "c459489acb035b4fcbd6a0e0cdcaa96a"
  },
  {
    "url": "api/invoice_shipment.html",
    "revision": "9674be7850cb8f02249e75319e9b650d"
  },
  {
    "url": "api/order.html",
    "revision": "9bb6de41365341a93d92a22e2cde2e90"
  },
  {
    "url": "api/product_review.html",
    "revision": "2ffa925ad2de9a8240f38fb136587b5f"
  },
  {
    "url": "api/products.html",
    "revision": "c85d7667cf99b7b271599c9b9062c15a"
  },
  {
    "url": "assets/css/0.styles.089e086a.css",
    "revision": "a4bbe82d974e7b44fe46fd61dab63266"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_create.5b95f787.jpg",
    "revision": "5b95f787eb2a1df4a4e3c40a18e560d7"
  },
  {
    "url": "assets/img/bagisto_add_getId.b8ef4301.jpg",
    "revision": "b8ef43017a2208a5ace5013ee5f7b391"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_add_no_pag.e0d835b9.jpg",
    "revision": "e0d835b90c7818878e275b05270d8e2e"
  },
  {
    "url": "assets/img/bagisto_add_save.fe38c3ed.jpg",
    "revision": "fe38c3ed21adc08631d3bcfd8fa186fa"
  },
  {
    "url": "assets/img/bagisto_addresses_pag.f925e963.jpg",
    "revision": "f925e9638da6a01f569dbd6cb4b7e494"
  },
  {
    "url": "assets/img/bagisto_addresses.69c52e23.jpg",
    "revision": "69c52e23567ce96ec654b5cd68f042da"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_cat_descendant.e53deefd.jpg",
    "revision": "e53deefdbf887826dba9dc8006d48173"
  },
  {
    "url": "assets/img/bagisto_cat_link.f8bd6e52.jpg",
    "revision": "f8bd6e5292e86564b039e43010239e2a"
  },
  {
    "url": "assets/img/bagisto_cat_meta.47625f4d.jpg",
    "revision": "47625f4df14ecc90da91e351e9295795"
  },
  {
    "url": "assets/img/bagisto_cat_no_pagination.3350fde7.jpg",
    "revision": "3350fde78614d1a8b09d295e4df5884d"
  },
  {
    "url": "assets/img/bagisto_cat_path.e1616a77.jpg",
    "revision": "e1616a774753a2b4b70d443f745faa58"
  },
  {
    "url": "assets/img/bagisto_cat_single.65f010dc.jpg",
    "revision": "65f010dc94198418def69206df4450b6"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_cust_id.08e1e6bf.jpg",
    "revision": "08e1e6bf1914ad3ba98219c9ba9eb342"
  },
  {
    "url": "assets/img/bagisto_cust_login.89c4f1c2.jpg",
    "revision": "89c4f1c2af6d4465cec3eb1dc63513e9"
  },
  {
    "url": "assets/img/bagisto_cust_profile.a00014cb.jpg",
    "revision": "a00014cbddae59c57e21688b62da0c78"
  },
  {
    "url": "assets/img/bagisto_cust_reg_error.2b51538d.jpg",
    "revision": "2b51538d85438321c0b35bd7756b68d5"
  },
  {
    "url": "assets/img/bagisto_cust_wishlists.1d1a29e1.jpg",
    "revision": "1d1a29e10e01a2a230f659f23f9d9002"
  },
  {
    "url": "assets/img/bagisto_invoices_id.a4ee4dcb.jpg",
    "revision": "a4ee4dcb34fe39c1cf20c12cb6280a01"
  },
  {
    "url": "assets/img/bagisto_invoices_order_id.c4a4caf7.jpg",
    "revision": "c4a4caf7099755eeae7a059f2f97b01a"
  },
  {
    "url": "assets/img/bagisto_invoices.4d11d760.jpg",
    "revision": "4d11d76031369e63d4c99c124ee87fba"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_cust_no_pag.4c5388dd.jpg",
    "revision": "4c5388ddf40afa36e2347659e9e76514"
  },
  {
    "url": "assets/img/bagisto_orders_cust_pag.da21cece.jpg",
    "revision": "da21cece8227bfbf0fe411826e0d7dcb"
  },
  {
    "url": "assets/img/bagisto_orders_custId.fb57ac66.jpg",
    "revision": "fb57ac66c0e3718eaf8beaadfaf43e88"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_orders_page.9bd58762.jpg",
    "revision": "9bd58762f642d8e5f67fe4d8e70fc30e"
  },
  {
    "url": "assets/img/bagisto_orders.b384037f.jpg",
    "revision": "b384037f25063a44656fd456cd316ef9"
  },
  {
    "url": "assets/img/bagisto_prod_category.f025ec53.jpg",
    "revision": "f025ec532bdeec8ad026544ccd1a2719"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_id.021f216e.jpg",
    "revision": "021f216e2bee0648642c0c605d944fee"
  },
  {
    "url": "assets/img/bagisto_prod_name.855f9003.jpg",
    "revision": "855f900374561eff2d9b7b29c3e18bf6"
  },
  {
    "url": "assets/img/bagisto_prod_new.e292e708.jpg",
    "revision": "e292e708de80f8aac040099d9e9f8827"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_prod_sku.164513e5.jpg",
    "revision": "164513e5123741fde135af9cf0399006"
  },
  {
    "url": "assets/img/bagisto_prod_url_key.176d6ada.jpg",
    "revision": "176d6ada81ce94457d38726141cef7bb"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_id.82b878ea.jpg",
    "revision": "82b878ea0e9eda36c07b9901c294730c"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_no_page.18ac3613.jpg",
    "revision": "18ac3613db7babe7c1c7e5fe5841487c"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_page.b56d32c8.jpg",
    "revision": "b56d32c80bf6cda1007c3f7d8dad2615"
  },
  {
    "url": "assets/img/bagisto_reviews_id.d4ea6ff1.jpg",
    "revision": "d4ea6ff18034ae0b5f7808587c66f3a6"
  },
  {
    "url": "assets/img/bagisto_reviews_no_page.9572dc0e.jpg",
    "revision": "9572dc0e6d2febecbc21b452672317dc"
  },
  {
    "url": "assets/img/bagisto_reviews_page.48a878f3.jpg",
    "revision": "48a878f31618485ea58cfcd8e1713200"
  },
  {
    "url": "assets/img/bagisto_reviews_prod_id.f7ecf7a1.jpg",
    "revision": "f7ecf7a11c6fcf6f2eef90cd33af62b5"
  },
  {
    "url": "assets/img/bagisto_reviews.429446e1.jpg",
    "revision": "429446e112ad7532eef464f30afb29fe"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipment_id.3fb5125a.jpg",
    "revision": "3fb5125a7b783a33d5e434e22bc3ff93"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_add.fdddfac5.jpg",
    "revision": "fdddfac5bd1483f6df432d32380b9041"
  },
  {
    "url": "assets/img/bagisto_wishlist_cust.5d9493f8.jpg",
    "revision": "5d9493f867e90342a51e8a76c3f0411b"
  },
  {
    "url": "assets/img/bagisto_wishlist_no_page.8db6977d.jpg",
    "revision": "8db6977d2e5848cc704b5c71a2684fdc"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.fe688e10.js",
    "revision": "d8a8bfe816b9a336bc90bbe2c16f4e52"
  },
  {
    "url": "assets/js/11.ade0b408.js",
    "revision": "66e6af42a2ac7f12d1c4e5ef664fceed"
  },
  {
    "url": "assets/js/12.d33b9bf0.js",
    "revision": "5a7bcf9a27dfec7c0d518290d186d0b6"
  },
  {
    "url": "assets/js/13.626fc501.js",
    "revision": "8099d3d8df246f502c7ba45e728bd31b"
  },
  {
    "url": "assets/js/14.6d2dfbb3.js",
    "revision": "37ad231d6b3fd03c926bfe578b188839"
  },
  {
    "url": "assets/js/15.e9076e66.js",
    "revision": "3757ae50e99ca1062d80bfd948de4f2c"
  },
  {
    "url": "assets/js/16.7bb6f4b2.js",
    "revision": "72e56a9f362493aa84c8e35a5371d9f7"
  },
  {
    "url": "assets/js/17.ff6690c5.js",
    "revision": "76c512b280ca9b4ab18afa4e120f13b8"
  },
  {
    "url": "assets/js/18.425d7b48.js",
    "revision": "0550b2c672e6937beb537b1570453d79"
  },
  {
    "url": "assets/js/19.a8950efe.js",
    "revision": "9ed674fd641d814f54b47e0335c695c8"
  },
  {
    "url": "assets/js/2.f85091d7.js",
    "revision": "4d9524e8cecd97dee604da7bd20aa908"
  },
  {
    "url": "assets/js/20.5a95526d.js",
    "revision": "a79d71bde22fc1e21f87babc4771164a"
  },
  {
    "url": "assets/js/21.f2225ee9.js",
    "revision": "ea878c2b894d2a74740eb28e8b901ad0"
  },
  {
    "url": "assets/js/22.5080ea21.js",
    "revision": "22a12c7b7446edfeda8147acae4207e8"
  },
  {
    "url": "assets/js/23.bd437d2e.js",
    "revision": "309c46385fd64c181da47af921cca83d"
  },
  {
    "url": "assets/js/24.ac653252.js",
    "revision": "f493240049fdf257c7ba5020c29dfe18"
  },
  {
    "url": "assets/js/25.84b0e69b.js",
    "revision": "d4b400fc16ccf7a2bf4cd67dcf305682"
  },
  {
    "url": "assets/js/26.71f0ebc8.js",
    "revision": "cbc3f2d7d099db332ca2a069fa1368e0"
  },
  {
    "url": "assets/js/27.8d9c29e7.js",
    "revision": "8e229b0da7126d6b6fa934fc2773ebc3"
  },
  {
    "url": "assets/js/28.d26e77e9.js",
    "revision": "cba8726aca1e12bdb51771b7fa64de54"
  },
  {
    "url": "assets/js/29.5b1c584c.js",
    "revision": "aba90bb5a7302fa9d2a3fc9342a8478d"
  },
  {
    "url": "assets/js/3.5d6d8026.js",
    "revision": "0876273b0cdb772f912421d7853643b5"
  },
  {
    "url": "assets/js/30.18e3997f.js",
    "revision": "2279dab0678040b9594f48d9854ee853"
  },
  {
    "url": "assets/js/31.459f2feb.js",
    "revision": "dd1d8a4065214fd9be03a432bcc51a31"
  },
  {
    "url": "assets/js/32.96a14561.js",
    "revision": "1165f12061e9e0c7e152da4851b0bc48"
  },
  {
    "url": "assets/js/33.d94c9bff.js",
    "revision": "fbc68055db7e319696b8e33944863b82"
  },
  {
    "url": "assets/js/34.8cb2adec.js",
    "revision": "d9d750c92db8aac16505cd43917f5cbb"
  },
  {
    "url": "assets/js/35.321d3d3d.js",
    "revision": "b1c39cba2ebdfb89b56e91a213fe3d14"
  },
  {
    "url": "assets/js/36.cc469848.js",
    "revision": "52fbae667b5a8601a56a6a3bda53be2d"
  },
  {
    "url": "assets/js/37.54ad7ecd.js",
    "revision": "fc1cb3fe8a8f19abe0c973664c9f9eeb"
  },
  {
    "url": "assets/js/38.b7ecd79d.js",
    "revision": "1d1ffef6b8e5c35a056949650881b64e"
  },
  {
    "url": "assets/js/39.69215514.js",
    "revision": "84f6d7552e3dcfa96e4cca1341bc2ea7"
  },
  {
    "url": "assets/js/4.2c601d82.js",
    "revision": "fe6c0579d1be0e8f7b6c499a3e40195c"
  },
  {
    "url": "assets/js/40.fcf9c2c1.js",
    "revision": "efb21a9760c2b11b6b2af9e37841fc53"
  },
  {
    "url": "assets/js/5.af10e1ff.js",
    "revision": "884e87f5f7a97f0f8541780af713b1ab"
  },
  {
    "url": "assets/js/6.3209771f.js",
    "revision": "10414ca54f941b942a487fbded4a7457"
  },
  {
    "url": "assets/js/7.c0d9c889.js",
    "revision": "6b3320e0cd4045a0d916aa0198ca3222"
  },
  {
    "url": "assets/js/8.41a91b47.js",
    "revision": "4d0e393106450a1e4ac2a4fa4b8f9cfa"
  },
  {
    "url": "assets/js/9.79dd970e.js",
    "revision": "88ccc6f30f785251c04e8ec9ae93ab0a"
  },
  {
    "url": "assets/js/app.7ad467e9.js",
    "revision": "b6af631ae100da76292790fbb2a5592c"
  },
  {
    "url": "index.html",
    "revision": "4ad7f637a9a064d245c7c725c946a538"
  },
  {
    "url": "introduction/folders.html",
    "revision": "ec303210b841ea0db5ddd9b5f3306de0"
  },
  {
    "url": "introduction/index.html",
    "revision": "31ff4bde18a4412c231fcc3611eb628d"
  },
  {
    "url": "introduction/installation.html",
    "revision": "aa2f487a34f5c4fabb6f1f24b18957bd"
  },
  {
    "url": "introduction/requirements.html",
    "revision": "fb3c63f62449f6888aece99900de0220"
  },
  {
    "url": "introduction/upgrade_to_latest_bagisto.html",
    "revision": "03e9a7cf456fd03855e88420bc61a979"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "packages/backend_menu.html",
    "revision": "95319160b5bfc6b0ba3f4ef28ad9a5e9"
  },
  {
    "url": "packages/create.html",
    "revision": "33ec586bffd5d81faa635c3d14873497"
  },
  {
    "url": "packages/index.html",
    "revision": "7430ab017f3be3e96c244c552f3de9b1"
  },
  {
    "url": "themes/create_admin_theme.html",
    "revision": "10a6868abdcceac5176f51baefbdcd1e"
  },
  {
    "url": "themes/create_theme.html",
    "revision": "69f9ad23f44446600f78d4f81a0b083b"
  },
  {
    "url": "themes/index.html",
    "revision": "7df050b9c4b489463887d2b51a578507"
  },
  {
    "url": "translations/index.html",
    "revision": "9e10712a2f462154d62383e8904276f3"
  },
  {
    "url": "user_guides/cart_catalog_rule.html",
    "revision": "7664f883012a89f50e85c195171e1c70"
  },
  {
    "url": "user_guides/cart_rule.html",
    "revision": "71cf142792914fd4324f2bec0c0dd00b"
  },
  {
    "url": "user_guides/index.html",
    "revision": "9357711a2c5bff2d4cecd326982d1992"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
