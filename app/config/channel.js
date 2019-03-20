// const channels= [{ name: "VTV1 HD", url:  "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV1_HD/03.m3u8"},
//  ]
//   "VTV2 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV2_HD/03.m3u8",
//   "VTV3 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV3_HD/03.m3u8",
//   "VTV4 HD": "https://hjyjrvmlsk.vcdn.com.vn/hls/hktebdo/index.m3u8",
//   "VTV5 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV5_HD/03.m3u8",
//   "VTV6 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV6_HD/03.m3u8",
//   "VTV7 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV7_HD/03.m3u8",
//   "VTV8 HD": "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV8_HD/04.m3u8",
//   "VTV9 HD": "http://liverestream2obj.5b1df984.cdnviet.com/hls/VTV9_HD_NEW/03.m3u8",
//   "HTV1": "http://live.cdn.mobifonetv.vn/motv/myhtv1_hls.smil/chunklist_b1200000.m3u8",
//   "HTV2": "http://live.cdn.mobifonetv.vn/motv/myhtv2_hls.smil/chunklist_b1200000.m3u8",
//   "HTV3": "http://live.cdn.mobifonetv.vn/motv/myhtv3_hls.smil/chunklist_b1200000.m3u8",
//   "HTV4": "http://live.cdn.mobifonetv.vn/motv/myhtv4_hls.smil/chunklist_b1200000.m3u8",
//   "HTV Thể  Thao": "http://live.cdn.mobifonetv.vn/motv/myhtvcthethao_hls.smil/playlist.m3u8",
//   "HTV7": "http://live.cdn.mobifonetv.vn/motv/myhtv7_hls.smil/playlist.m3u8",
//   "HTV9": "http://live.cdn.mobifonetv.vn/motv/myhtv9_hls.smil/playlist.m3u8",
//   "VĨNH LONG 1 HD": "http://cdn3.vtcplay.vn:1935/VTC/smil:VinhLong1HD.smil/playlist.m3u8",
//   "VĨNH LONG 2 HD": "http://cdn3.vtcplay.vn:1935/VTC/smil:VinhLong2HD.smil/playlist.m3u8"
// }

const channels = [
  {
    name: "VTV1 HD",
    img: require("../../assets/img/vtv1.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV1_HD/03.m3u8"
  },
  {
    name: "VTV2 HD",
    img: require("../../assets/img/vtv2.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV2_HD/03.m3u8"
  },
  {
    name: "VTV3 HD",
    img: require("../../assets/img/vtv3.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV3_HD/03.m3u8"
  },
  {
    name: "VTV4 HD",
    img: require("../../assets/img/vtv4.png"),
    url: "https://hjyjrvmlsk.vcdn.com.vn/hls/hktebdo/index.m3u8"
  },
  {
    name: "VTV5 HD",
    img: require("../../assets/img/vtv5.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV5_HD/03.m3u8"
  },
  {
    name: "VTV6 HD",
    img: require("../../assets/img/vtv6.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV6_HD/03.m3u8"
  },
  {
    name: "VTV7 HD",
    img: require("../../assets/img/vtv7.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV7_HD/03.m3u8"
  },
  {
    name: "VTV8 HD",
    img: require("../../assets/img/vtv8.png"),
    url: "http://liverestreamobj.5b1df984.cdnviet.com/hls/VTV8_HD/04.m3u8"
  },
  {
    name: "VTV9 HD",
    img: require("../../assets/img/vtv9.png"),
    url: "http://liverestream2obj.5b1df984.cdnviet.com/hls/VTV9_HD_NEW/03.m3u8"
  },
  {
    name: "HTV1",
    img: require("../../assets/img/htv1.png"),
    url:
      "http://live.cdn.mobifonetv.vn/motv/myhtv1_hls.smil/chunklist_b1200000.m3u8"
  },
  {
    name: "HTV2",
    img: require("../../assets/img/htv2.png"),
    url:
      "http://live.cdn.mobifonetv.vn/motv/myhtv2_hls.smil/chunklist_b1200000.m3u8"
  },
  {
    name: "HTV3",
    img: require("../../assets/img/htv3.png"),
    url:
      "http://live.cdn.mobifonetv.vn/motv/myhtv3_hls.smil/chunklist_b1200000.m3u8"
  },
  {
    name: "HTV4",
    img: require("../../assets/img/vtv3.png"),
    url:
      "http://live.cdn.mobifonetv.vn/motv/myhtv4_hls.smil/chunklist_b1200000.m3u8"
  },
  {
    name: "HTV Thể Thao",
    img: require("../../assets/img/vtv3.png"),
    url:
      "http://live.cdn.mobifonetv.vn/motv/myhtvcthethao_hls.smil/playlist.m3u8"
  },
  {
    name: "HTV7",
    img: require("../../assets/img/vtv3.png"),
    url: "http://live.cdn.mobifonetv.vn/motv/myhtv7_hls.smil/playlist.m3u8"
  },
  {
    name: "HTV9",
    img: require("../../assets/img/vtv3.png"),
    url: "http://live.cdn.mobifonetv.vn/motv/myhtv9_hls.smil/playlist.m3u8"
  },
  {
    name: "VĨNH LONG 1 HD",
    img: require("../../assets/img/vtv3.png"),
    url: "http://cdn3.vtcplay.vn:1935/VTC/smil:VinhLong1HD.smil/playlist.m3u8"
  },
  {
    name: "VĨNH LONG 2 HD",
    img: require("../../assets/img/vtv3.png"),
    url: "http://cdn3.vtcplay.vn:1935/VTC/smil:VinhLong2HD.smil/playlist.m3u8"
  }
];

export default channels;
