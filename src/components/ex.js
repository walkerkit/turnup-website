/* eslint-disable */

// let remainderList = []; // eslint-disable-line
// const interConnectCount = 2;
// for (let i = 0; i < this.nodeData.length; i += 1) {
//   remainderList.push(i);
// }
// do {
//   const tempNode = this.nodeData[remainderList[0]];
//   remainderList = remainderList.slice(1);
//   let distanceList = [];
//   for (let j = 0; j < remainderList.length; j += 1) {
//         const xdiff = Math.abs(tempNode.pos[0] - this.nodeData[remainderList[j]].pos[0])**2 ; //eslint-disable-line
//         const ydiff = Math.abs(tempNode.pos[1] - this.nodeData[remainderList[j]].pos[1])**2; // eslint-disable-line
//     const distance = Math.sqrt(xdiff + ydiff);
//     distanceList.push([this.nodeData[remainderList[j]].index, distance]);
//   }
//   distanceList = distanceList.sort((a, b) => a[1] - b[1]);

//   const lineList = [];
//   for (let k = 0; k < interConnectCount; k += 1) {
//     if (distanceList[k][1] < this.width * 0.15) {
//       lineList.push(distanceList[k]);
//     }
//   }

//   for (let l = 0; l < lineList.length; l += 1) {
//     this.addLine(
//       {
//         node1: tempNode.index,
//         node2: lineList[l][0],
//       },
//     );
//   }
// } while (remainderList.length > interConnectCount);

const nodeData = [{
  index: 0, colour: 3, speed: 1.819673090167458, angle: 311.8805085165775, pos: [1861.4935961941576, 756.6640258341597], radius: 2.740572537160416, collided: false,
}, {
  index: 1, colour: 7, speed: 1.0935748156051743, angle: 308.9443380381647, pos: [1572.2129358352938, 1058.1845725760506], radius: 4.560223979520811, collided: false,
}, {
  index: 2, colour: 9, speed: 1.669477288985823, angle: 9.734245046364066, pos: [579.2334064938175, 387.9117607295514], radius: 3.00342569202294, collided: false,
}, {
  index: 3, colour: 3, speed: 2.334209832607528, angle: 88.03952272372544, pos: [1778.904381909939, 1391.7344684817322], radius: 3.6395724664736337, collided: false,
}, {
  index: 4, colour: 4, speed: 2.2495264451207153, angle: 140.68809466595405, pos: [1902.0909023426054, 1461.7793672783991], radius: 3.066367493963021, collided: false,
}, {
  index: 5, colour: 1, speed: 2.45984116887022, angle: 61.31098466618977, pos: [903.2993363081076, 978.9578563186383], radius: 3.783505096638891, collided: false,
}, {
  index: 6, colour: 0, speed: 2.614866118904391, angle: 187.2757564005335, pos: [1560.9875546052053, 868.115611995534], radius: 3.248933387568595, collided: false,
}, {
  index: 7, colour: 7, speed: 2.339339483259888, angle: 196.50942508069602, pos: [601.7646371544201, 752.3524016624757], radius: 3.6315916943751168, collided: false,
}, {
  index: 8, colour: 7, speed: 1.5406321059068833, angle: 290.50303955014544, pos: [1562.0660771195314, 127.65623321159026], radius: 3.353238369369034, collided: false,
}, {
  index: 9, colour: 4, speed: 2.3801594283529792, angle: 182.35564756739348, pos: [389.1259053116762, 383.8777260158132], radius: 4.961908559758461, collided: false,
}, {
  index: 10, colour: 5, speed: 2.3680770578736077, angle: 51.54748540350647, pos: [1888.6259993094868, 1417.1385965285945], radius: 3.378314824053583, collided: false,
}, {
  index: 11, colour: 5, speed: 1.8667330858920785, angle: 150.7203707972535, pos: [1768.405607416666, 88.92585018130033], radius: 4.2797845495343205, collided: false,
}, {
  index: 12, colour: 1, speed: 1.624478380809986, angle: 276.6720636553406, pos: [287.7416581051122, 296.49876175556267], radius: 2.4519282833406386, collided: false,
}, {
  index: 13, colour: 0, speed: 1.783724250377531, angle: 24.97959795199114, pos: [19.09411446595405, 1221.8843996683718], radius: 4.297961240690808, collided: false,
}, {
  index: 14, colour: 3, speed: 1.565006922415416, angle: 37.28933212487057, pos: [1525.6636856567357, 1115.697413776001], radius: 4.705697829286157, collided: false,
}, {
  index: 15, colour: 5, speed: 2.308434709849083, angle: 109.18178959364886, pos: [885.5756031405971, 758.1308287737579], radius: 3.5662997729854715, collided: false,
}, {
  index: 16, colour: 2, speed: 1.5797166283204256, angle: 356.00619989182485, pos: [1074.024322610463, 902.2073279758062], radius: 4.372286850601299, collided: false,
}, {
  index: 17, colour: 1, speed: 1.9031852016834367, angle: 289.31238136119117, pos: [206.4992011460713, 51.87204753272846], radius: 4.39247510444349, collided: false,
}, {
  index: 18, colour: 8, speed: 2.195782433681442, angle: 147.59517055322203, pos: [1833.3431543838915, 1192.7914112193594], radius: 2.7614207010637335, collided: false,
}, {
  index: 19, colour: 8, speed: 2.2415130190459447, angle: 267.43357032569656, pos: [1766.7093825333764, 1502.898637418075], radius: 3.3085483264074216, collided: false,
}, {
  index: 20, colour: 7, speed: 2.1573182640678477, angle: 310.8630579419971, pos: [321.0686716601578, 769.7520638881801], radius: 2.397767869787944, collided: false,
}, {
  index: 21, colour: 2, speed: 2.923485809265705, angle: 284.73885197365223, pos: [458.29372933068976, 1076.7321707856756], radius: 2.5481687238640687, collided: false,
}, {
  index: 22, colour: 6, speed: 1.8991993348159504, angle: 266.1955758592476, pos: [1100.136359931058, 101.77800481159639], radius: 3.412171733378309, collided: false,
}, {
  index: 23, colour: 6, speed: 2.1742206831708177, angle: 283.5525830095981, pos: [316.04955088568335, 916.6132115190848], radius: 2.635059574931881, collided: false,
}, {
  index: 24, colour: 3, speed: 1.7986931676774545, angle: 285.60817773482887, pos: [1860.7951749438607, 1516.0467087730328], radius: 4.350692412723986, collided: false,
}, {
  index: 25, colour: 2, speed: 2.3288830785981336, angle: 226.23400473385828, pos: [1594.9629816945371, 87.86467800498212], radius: 2.2132798503868045, collided: false,
}, {
  index: 26, colour: 4, speed: 1.5503020508771554, angle: 145.63724036899174, pos: [339.8054378123316, 220.09610501534758], radius: 3.068226509946255, collided: false,
}, {
  index: 27, colour: 6, speed: 2.3221762527030885, angle: 186.06653197301972, pos: [1233.2664651628954, 445.9920288860915], radius: 2.721034680121936, collided: false,
}, {
  index: 28, colour: 2, speed: 2.1314274475142403, angle: 190.6648018176394, pos: [612.3851762289588, 732.5339060201011], radius: 4.122756726464331, collided: false,
}, {
  index: 29, colour: 3, speed: 1.7286393186579316, angle: 8.674118067945102, pos: [1127.3361413653283, 328.4137490238094], radius: 4.309479151275421, collided: false,
}, {
  index: 30, colour: 2, speed: 1.5968268068347315, angle: 242.00194234588878, pos: [1199.689039585977, 29.122132029268123], radius: 3.36946591870523, collided: false,
}, {
  index: 31, colour: 6, speed: 2.8135129337571243, angle: 61.89677727129066, pos: [77.41913357379534, 908.9050609554821], radius: 3.685642364898288, collided: false,
}, {
  index: 32, colour: 1, speed: 2.4499642108470567, angle: 218.9829410112717, pos: [1577.2627281416492, 1062.2292776490385], radius: 4.232552629517521, collided: false,
}, {
  index: 33, colour: 2, speed: 1.6989317611935646, angle: 322.82840508501545, pos: [796.5790843947252, 179.99166331384865], radius: 3.3171714091455935, collided: false,
}, {
  index: 34, colour: 4, speed: 2.1529958062078176, angle: 299.99137101121585, pos: [782.7537746384279, 722.1241944812862], radius: 2.2566670764083057, collided: false,
}, {
  index: 35, colour: 6, speed: 1.6881872293238036, angle: 101.37466210600036, pos: [557.9125039514814, 109.3853969998728], radius: 3.4505171985704366, collided: false,
}, {
  index: 36, colour: 9, speed: 1.9176510105968458, angle: 256.85519470925044, pos: [247.63024348109775, 282.55323344872187], radius: 2.077074746954982, collided: false,
}, {
  index: 37, colour: 0, speed: 1.7528977488796489, angle: 227.06549352874805, pos: [537.8832547551435, 1165.8082237120232], radius: 2.9405423077657997, collided: false,
}, {
  index: 38, colour: 2, speed: 1.7361779865272355, angle: 125.33784073220315, pos: [312.77813146478655, 690.6046253514835], radius: 3.639052168790488, collided: false,
}, {
  index: 39, colour: 0, speed: 1.7741879464288364, angle: 50.25633871943711, pos: [766.3957994312749, 437.984078638212], radius: 3.1764660985688367, collided: false,
}, {
  index: 40, colour: 9, speed: 1.8365774732512075, angle: 261.48203087594095, pos: [237.2449184754524, 274.9796769195807], radius: 3.068559832841757, collided: false,
}, {
  index: 41, colour: 3, speed: 1.799036226904668, angle: 289.992430152623, pos: [289.18015478538416, 66.0459902502981], radius: 3.5284931029212885, collided: false,
}, {
  index: 42, colour: 5, speed: 1.6062870895856551, angle: 309.91778629529927, pos: [118.5867335741812, 1145.099444376653], radius: 2.5726097470686717, collided: false,
}, {
  index: 43, colour: 6, speed: 2.278560664274276, angle: 215.8249414034782, pos: [786.4866251265148, 1387.4075887971564], radius: 3.7921867773796385, collided: false,
}, {
  index: 44, colour: 8, speed: 2.3621739232007855, angle: 153.98789380330257, pos: [1057.6366036214001, 971.8473476909918], radius: 2.025828413025511, collided: false,
}, {
  index: 45, colour: 9, speed: 2.332890373048089, angle: 46.394899817336494, pos: [314.0876787764389, 1035.064283302246], radius: 4.974119023838872, collided: false,
}, {
  index: 46, colour: 6, speed: 2.481727495025928, angle: 351.1421498301147, pos: [1366.0119905810227, 334.26902423286504], radius: 2.826169209669413, collided: false,
}, {
  index: 47, colour: 0, speed: 1.5434764333262063, angle: 147.5255897212199, pos: [304.0340892793806, 640.3291343248352], radius: 4.39500622691578, collided: false,
}, {
  index: 48, colour: 7, speed: 1.335281354619946, angle: 340.01580581180883, pos: [1845.3518584679819, 414.09465126662354], radius: 4.732127873349335, collided: false,
}, {
  index: 49, colour: 4, speed: 2.462936671896989, angle: 156.05699008368316, pos: [1782.3142924771305, 249.11314955543247], radius: 4.30286184347289, collided: false,
}];

const xPos = {};
const yPos = {};

for (let i = 0; i < nodeData.length; i += 1) {
  const node = nodeData[i];
  xPos[Math.floor(node.pos.x)] = i;
  yPos[Math.floor(node.pos.y)] = i;
}

do {
  const tempNode = nodeData[remainderList[0]];
  remainderList = remainderList.slice(1);

  const xList = {};
  const yList = {};

  const intPosX = Math.floor(tempNode.pos.x);
  const intPosY = Math.floor(tempNode.pos.y);

  for (let j = 0; j < this.width * 0.15 * 2; j += 1) {
    if (xPos[intPosX - this.width * 0.15 + j]) {
      xList[xPos[intPosX - this.width * 0.15 + j]] = true;
    }
  }
  for (let i = 0; i < this.width * 0.15 * 2; i += 1) {
    if (yPos[intPosY - this.width * 0.15 + i]) {
      yList[yPos[intPosY - this.width * 0.15 + i]] = true;
    }
  }

    for (const [key, value] of xList.entries()) {
      if (yList[key]){
          
      }
    }
  // if (yList[xList[l]]) {
  //   this.addLine(
  //     {
  //       node1: tempNode.index,
  //       node2: lineList[l][0],
  //     },
  //   );
  // }
} while (remainderList.length > interConnectCount);
