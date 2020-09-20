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
    "revision": "15aec88c635a7a6d22ac9ceeddad5064"
  },
  {
    "url": "advanced/create_payment_method.html",
    "revision": "f50835904a87cb0ffb3d8e07ee7a994a"
  },
  {
    "url": "advanced/create_shipping_method.html",
    "revision": "edcdbae18d8979e9ade329f3f954a69b"
  },
  {
    "url": "advanced/datagrid.html",
    "revision": "51ee396f9be4d01d453eaf8499faa4d6"
  },
  {
    "url": "advanced/events.html",
    "revision": "a813e83e2512e11ee70d1686b958e6a8"
  },
  {
    "url": "advanced/index.html",
    "revision": "dea321ac24d3ed6316ef4d55aba2d7bd"
  },
  {
    "url": "advanced/override-core-model.html",
    "revision": "f98be213a314c53f223359a197bbb515"
  },
  {
    "url": "advanced/render_event.html",
    "revision": "ae2e4e5072aea14c675bf2d62683491b"
  },
  {
    "url": "advanced/security_practice.html",
    "revision": "ce93ae0ac5549b2a842f583cccadaded"
  },
  {
    "url": "api/cart.html",
    "revision": "75a231db61b1174d371d7277e79a6cfe"
  },
  {
    "url": "api/categories.html",
    "revision": "c68811a2cb6a530308dbeee957c213e0"
  },
  {
    "url": "api/customer_addresses.html",
    "revision": "d2fdada61e8153ca8f949d9ef23f59de"
  },
  {
    "url": "api/customer_review.html",
    "revision": "48f769ede9a46c0b455bb6c38c2a4a94"
  },
  {
    "url": "api/customer_wishlist.html",
    "revision": "3fde07c79f165696c1213832676ae9c2"
  },
  {
    "url": "api/customers.html",
    "revision": "de03ca17d11c790f802d7ac321f1f20c"
  },
  {
    "url": "api/index.html",
    "revision": "dadb5d5b411b76ed76a781a3fa444b60"
  },
  {
    "url": "api/invoice_shipment.html",
    "revision": "b5e66bd997c3039169f84082a792eba9"
  },
  {
    "url": "api/order.html",
    "revision": "718a1b5c94812b47e4cb4dcc3094eb97"
  },
  {
    "url": "api/product_review.html",
    "revision": "5289cccde85f7217fa8c82592e63f25d"
  },
  {
    "url": "api/products.html",
    "revision": "992c5b59182048e5c527dae8021f0853"
  },
  {
    "url": "assets/css/0.styles.fb7b26fb.css",
    "revision": "d397ded3f75e375ade473ed68295d888"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_add_save.fe38c3ed.jpg",
    "revision": "fe38c3ed21adc08631d3bcfd8fa186fa"
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
    "url": "assets/img/bagisto_cust_login.89c4f1c2.jpg",
    "revision": "89c4f1c2af6d4465cec3eb1dc63513e9"
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
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
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
    "url": "assets/js/10.3601aafe.js",
    "revision": "ba2a25be354f62ecdaabb6844715a962"
  },
  {
    "url": "assets/js/11.398713a3.js",
    "revision": "0b91ac15cd92b08f54a026e50d1eeb6d"
  },
  {
    "url": "assets/js/12.b728d42a.js",
    "revision": "0d43f28f07db53057294ead70b0012b3"
  },
  {
    "url": "assets/js/13.47c52634.js",
    "revision": "af60c21d5ef62a62ceddcbeff0d5db52"
  },
  {
    "url": "assets/js/14.6600d577.js",
    "revision": "ca7fbb21cafe15c7f18e8ff72c2146b4"
  },
  {
    "url": "assets/js/15.001c2389.js",
    "revision": "f23bfab9c96e6a6661266bfa1f7b3db4"
  },
  {
    "url": "assets/js/16.ff37ba9d.js",
    "revision": "c910a3c54c445cf99f2ed93434c1cad9"
  },
  {
    "url": "assets/js/17.ef9c4e42.js",
    "revision": "c6118f539720e3fdd9d4fa1b1f2c6cf8"
  },
  {
    "url": "assets/js/18.84bc0d17.js",
    "revision": "c83815be662f6d790a3f769afb481baf"
  },
  {
    "url": "assets/js/19.f02a4309.js",
    "revision": "0f5d3a71d48c413276ee8498e6ad30a2"
  },
  {
    "url": "assets/js/2.f9904a46.js",
    "revision": "853f94f529bd11d00fba95d22eb5f52a"
  },
  {
    "url": "assets/js/20.a75e31fe.js",
    "revision": "a1d13cee781b62e4deb63d3e82eea296"
  },
  {
    "url": "assets/js/21.92882a00.js",
    "revision": "5b59993963423b192ed8bd6d9052ba07"
  },
  {
    "url": "assets/js/22.ba7ca326.js",
    "revision": "a26133d3ed1640146eee294d639bc0c5"
  },
  {
    "url": "assets/js/23.c84b6ff5.js",
    "revision": "dda6c2601d39f70be99a7bc9e60a79ae"
  },
  {
    "url": "assets/js/24.6b8dd6e4.js",
    "revision": "37d5b67dd1d12514687ac6e6c4b96669"
  },
  {
    "url": "assets/js/25.e17a6dc6.js",
    "revision": "7cd3d08ab10142afd78f3eaf8c3effe0"
  },
  {
    "url": "assets/js/26.c598c8dd.js",
    "revision": "3abf3c26910c1446c960bcd112cb49c8"
  },
  {
    "url": "assets/js/27.961e3f7f.js",
    "revision": "ffd4ece31a3defd63c8bf1b41422d298"
  },
  {
    "url": "assets/js/28.65f35854.js",
    "revision": "e1ca4ab1115b50932c950917ee2ed72b"
  },
  {
    "url": "assets/js/29.0b96cfc3.js",
    "revision": "0d176d525afc4fc721e5af5f6e6857b7"
  },
  {
    "url": "assets/js/3.0fad9eaf.js",
    "revision": "25a5f70cb5407643f46a715f3e98fd8d"
  },
  {
    "url": "assets/js/30.d8c4c1f3.js",
    "revision": "e7910148bf124e6801db2def44348d69"
  },
  {
    "url": "assets/js/31.a61b65c6.js",
    "revision": "81be5b3f3786047e18ee18e8d791c2c6"
  },
  {
    "url": "assets/js/32.e4b0edff.js",
    "revision": "40d0aeda151bf4620645e8f965a098d0"
  },
  {
    "url": "assets/js/33.80dacfca.js",
    "revision": "57faee3178abce32432d5d4c11a75dde"
  },
  {
    "url": "assets/js/34.ce48ff38.js",
    "revision": "a453290ea0e047e26edd9bca1cec0c7b"
  },
  {
    "url": "assets/js/35.ba7a8228.js",
    "revision": "8935ec1b85ec15f9c7390f0f053f01b1"
  },
  {
    "url": "assets/js/36.73c4f81a.js",
    "revision": "886f65708fc22bbf931314a97d6488a5"
  },
  {
    "url": "assets/js/37.d556dd83.js",
    "revision": "c81c0dd176874be55a71c9dcfc593f11"
  },
  {
    "url": "assets/js/38.a60c7305.js",
    "revision": "c0f51d1a5bdc6cf95109dcb8c8931e0b"
  },
  {
    "url": "assets/js/39.bcbc7ace.js",
    "revision": "e2d9a6da7b9e31a96c4c2402dc3443a6"
  },
  {
    "url": "assets/js/4.6a5d3431.js",
    "revision": "4131b6d4e880eb8d65633500a67b7a09"
  },
  {
    "url": "assets/js/40.b1d68875.js",
    "revision": "47a737fe87e9fe639bb742419b0cefdd"
  },
  {
    "url": "assets/js/41.b9d58b44.js",
    "revision": "02ff84e6b3816f5cbf41b66c6429dae0"
  },
  {
    "url": "assets/js/5.4a14744a.js",
    "revision": "ab811a4c274615bf855ad7009177950e"
  },
  {
    "url": "assets/js/6.9eef0668.js",
    "revision": "e9def45e06274fd19a7ea370433c0276"
  },
  {
    "url": "assets/js/7.b098f7d9.js",
    "revision": "9d34b344f675c484e049aa20d4b4a739"
  },
  {
    "url": "assets/js/8.3c1020e2.js",
    "revision": "434e3194f70b39fb0dc61a1237df218a"
  },
  {
    "url": "assets/js/9.695fa553.js",
    "revision": "08ef183ee7a37c223310c852dc47a8c0"
  },
  {
    "url": "assets/js/app.d6d3cecd.js",
    "revision": "3145d710cf8df20671d6237e5a16b406"
  },
  {
    "url": "deploy/index.html",
    "revision": "6789360b8a3c89bf650e364980b5f1d6"
  },
  {
    "url": "index.html",
    "revision": "c86e2eab801dd6a4bdaa9d8e3ece99fe"
  },
  {
    "url": "introduction/folders.html",
    "revision": "fd81552344e2d3b03b2e588b684b7f93"
  },
  {
    "url": "introduction/index.html",
    "revision": "b62beef000a379bb32c9a24e0a3a8167"
  },
  {
    "url": "introduction/installation.html",
    "revision": "3db29c5ed9c3211fc9517c60c42e9b9e"
  },
  {
    "url": "introduction/requirements.html",
    "revision": "a12488de021e3003bb39a04d99f8d77b"
  },
  {
    "url": "introduction/upgrade_to_latest_bagisto.html",
    "revision": "737c46f49b8d8f6a6397e9e936ac6f78"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "packages/backend_menu.html",
    "revision": "12d5341055188c4e4f655e49b1b94aeb"
  },
  {
    "url": "packages/create.html",
    "revision": "8cb3b6ed93e6013e96a7252e7261222e"
  },
  {
    "url": "packages/index.html",
    "revision": "a75491a863c118ab34492cac312d6b8e"
  },
  {
    "url": "themes/create_admin_theme.html",
    "revision": "50b2329aaac0f2c28fa72eca8ec31fc8"
  },
  {
    "url": "themes/create_theme.html",
    "revision": "c0878d9382a70c2d6bab3747cd9f2f73"
  },
  {
    "url": "themes/index.html",
    "revision": "c43de20ac9d2d191dbc754f0fde58880"
  },
  {
    "url": "translations/index.html",
    "revision": "8f79612d748e2a3ea3a49c117972cab5"
  },
  {
    "url": "user_guides/cart_catalog_rule.html",
    "revision": "8a4e503b3baeefc96fd284a1f4d3ded7"
  },
  {
    "url": "user_guides/cart_rule.html",
    "revision": "3e7dd6390572a38dd7510b82f54bc5cc"
  },
  {
    "url": "user_guides/index.html",
    "revision": "fe663fd9bf16cf0f2aaa38e5237d1c23"
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
