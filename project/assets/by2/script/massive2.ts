export interface Massive {
    type: number,
    group: number,
    lifeTime: number,
    lineFishes?: {
        fishType: number,
        points: number[][]
    }[],
    routeIntervalFishes?: {
        routeId: number,//路线ID
        intervalTime: number, //间隔时间,开始时间也要刷
        intervalCount: number, //刷几波
        fishType: number,
        startTime?: number,
    }[],
    midIntervalFishes?: {
        intervalTime: number,//间隔时间，开始时间也要刷
        fishCountPerInterval: number,//每波刷几条
        fishTypes: number[],//每波刷什么
    }
}

export const time = 19;
export const massive: Massive[] = [
    {
        type: 1,
        group: 1,
        lifeTime: 26.329,
        lineFishes: [{ fishType: 11, points: [[-157, 157, 1], [-86, 178, 2], [-34, 140, 3], [-13, 88, 4], [-21, 34, 5], [-56, -24, 6], [-103, -77, 7], [-160, -119, 8], [-214, -169, 9], [-252, -121, 10], [-322, -22, 11], [-360, 31, 12], [-391, 84, 13], [-364, 131, 14], [-307, 165, 15]] },
        { fishType: 24, points: [[-581, -60, 16], [-538, -120, 17], [-587, 184, 18], [-616, -3, 19], [-230, 37, 20], [-300, -88, 21], [-301, 205, 22], [-377, 215, 23], [-635, 128, 24], [-228, 109, 25], [-347, -140, 26], [-257, -26, 27], [-257, 162, 28], [-650, 59, 29], [-423, 177, 30], [-512, 168, 31], [-501, -174, 32], [-392, -180, 33], [-467, 135, 34], [-455, -225, 35]] },
        { fishType: 31, points: [[-475, 0, 36]] },
        ]
    },
    {
        type: 10,
        group: 1,
        lifeTime: 25.9294,
        lineFishes: [{ fishType: 21, points: [[-43, 140, 1], [-43, -125, 2]] },
        { fishType: 24, points: [[-202, 145, 3], [-164, 198, 4], [-273, 242, 5], [-459, 188, 6], [-404, 116, 7], [-444, 72, 8], [-192, 261, 9], [-590, 133, 10], [-337, 203, 11], [-364, 71, 12], [-249, 98, 13], [-520, 98, 14], [-398, 168, 15], [-224, 54, 16], [-96, 113, 17], [-524, 168, 18], [-202, -130, 19], [-157, 83, 20], [-273, -226, 21], [-459, -172, 22], [-404, -101, 23], [-444, -57, 24], [-337, -187, 25], [-192, -245, 26], [-164, -182, 27], [-590, -118, 28], [-364, -56, 29], [-249, -83, 30], [-524, -152, 31], [-520, -83, 32], [-398, -152, 33], [-224, -39, 34], [-157, -68, 35], [-96, -98, 36]] },
        { fishType: 31, points: [[-295, 5, 37]] },
        ]
    },
    {
        type: 11,
        group: 1,
        lifeTime: 25.38994,
        lineFishes: [{ fishType: 23, points: [[-43, 29, 1], [-45, 89, 2], [-122, 150, 3], [-190, 150, 4], [-256, 150, 5], [-318, 150, 6], [-379, 150, 7], [-442, 150, 8], [-507, 150, 9], [-448, -150, 10], [-385, -150, 11], [-319, -150, 12], [-251, -150, 13], [-183, -150, 14], [-116, -150, 15], [-45, -150, 16], [-45, -89, 17], [-46, -31, 18], [-509, 89, 19], [-49, 150, 20], [-508, 29, 21], [-508, -31, 22], [-507, -89, 23], [-507, -150, 24]] },
        { fishType: 45, points: [[-200, 11, 25], [-371, 11, 26]] },
        ]
    },
    {
        type: 12,
        group: 1,
        lifeTime: 25.57642,
        lineFishes: [{ fishType: 24, points: [[-124, -217, 1], [-207, -174, 2], [-352, -168, 3], [-414, -128, 4], [-138, -129, 5], [-478, 7, 6], [-425, -211, 7], [-180, -46, 8], [-103, 7, 9], [-396, -41, 10], [-282, -120, 11], [-246, 154, 12], [-27, 63, 13], [-131, 63, 14], [-230, 63, 15], [-313, 154, 16], [-282, 242, 17], [-430, 63, 18], [-333, 61, 19], [-537, 63, 20]] },
        { fishType: 44, points: [[-276, -13, 21]] },
        ]
    },
    {
        type: 13,
        group: 1,
        lifeTime: 25.05158,
        lineFishes: [{ fishType: 11, points: [[-283, 170, 1], [-317, 115, 2], [-291, 65, 3], [-242, 25, 4], [-190, -29, 5], [-173, -95, 6], [-228, -149, 7], [-18, 11, 8], [-31, 86, 9], [-69, 152, 10], [-128, 201, 11], [-199, 227, 12], [-276, 227, 13], [-347, 201, 14], [-406, 152, 15], [-444, 86, 16], [-458, 11, 17], [-445, -63, 18], [-407, -130, 19], [-348, -179, 20], [-276, -205, 21], [-200, -205, 22], [-128, -179, 23], [-70, -130, 24], [-31, -64, 25]] },
        { fishType: 43, points: [[-180, 98, 26], [-337, -79, 27]] },
        ]
    },
    {
        type: 14,
        group: 1,
        lifeTime: 27.22589,
        lineFishes: [{ fishType: 11, points: [[-234, 12, 1], [-255, 92, 2], [-314, 151, 3], [-394, 172, 4], [-474, 151, 5], [-532, 92, 6], [-554, 12, 7], [-533, -67, 8], [-474, -125, 9], [-394, -147, 10], [-314, -126, 11], [-255, -67, 12]] },
        { fishType: 13, points: [[-32, -1, 13], [-71, 76, 14], [-140, 118, 15], [-211, 102, 16], [-212, -104, 17], [-133, -120, 18], [-60, -80, 19], [-648, 114, 20], [-730, 78, 21], [-784, 0, 22], [-727, -86, 23], [-646, -115, 24]] },
        { fishType: 45, points: [[-152, 5, 25], [-670, 5, 26]] },
        { fishType: 51, points: [[-407, -1, 27]] },
        ]
    },
    {
        type: 15,
        group: 1,
        lifeTime: 25.1105,
        lineFishes: [{ fishType: 13, points: [[-292, -222, 1], [-225, -204, 2], [-94, -112, 3], [-159, -164, 4], [-459, -97, 5], [-363, -216, 6], [-380, -2, 7], [-466, -151, 8], [-428, -194, 9], [-31, -2, 10], [-52, -57, 11], [-417, -57, 12], [-293, 218, 13], [-226, 200, 14], [-95, 107, 15], [-160, 160, 16], [-460, 93, 17], [-364, 212, 18], [-467, 146, 19], [-429, 189, 20], [-52, 52, 21], [-418, 53, 22]] },
        { fishType: 53, points: [[-197, -1, 23]] },
        ]
    },
    {
        type: 2,
        group: 1,
        lifeTime: 25.17708,
        lineFishes: [{ fishType: 21, points: [[-89, 0, 1], [-109, 74, 2], [-163, 129, 3], [-238, 149, 4], [-313, 129, 5], [-368, 75, 6], [-388, 0, 7], [-369, -74, 8], [-314, -129, 9], [-239, -149, 10], [-164, -130, 11], [-109, -75, 12]] },
        { fishType: 24, points: [[-41, 0, 13], [-60, 89, 14], [-114, 163, 15], [-193, 209, 16], [-284, 218, 17], [-371, 190, 18], [-439, 129, 19], [-476, 46, 20], [-477, -45, 21], [-440, -128, 22], [-372, -190, 23], [-285, -218, 24], [-194, -209, 25], [-115, -163, 26], [-61, -90, 27]] },
        { fishType: 44, points: [[-192, 3, 28]] },
        ]
    },
    {
        type: 3,
        group: 1,
        lifeTime: 24.70148,
        lineFishes: [{ fishType: 13, points: [[-405, 104, 1], [-340, 104, 2], [-275, 104, 3], [-210, 104, 4], [-145, 104, 5], [-80, 104, 6], [-15, 104, 7], [-376, 53, 8], [-344, -3, 9], [-311, -59, 10], [-247, -172, 11], [-215, -229, 12], [-405, -109, 13], [-340, -109, 14], [-275, -109, 15], [-210, -109, 16], [-145, -109, 17], [-80, -109, 18], [-15, -109, 19], [-213, 221, 20], [-180, 165, 21], [-116, 51, 22], [-84, -4, 23], [-52, -61, 24], [-245, 170, 25], [-310, 58, 26], [-376, -53, 27], [-53, 58, 28], [-118, -53, 29], [-184, -165, 30]] },
        { fishType: 51, points: [[-215, 5, 31]] },
        ]
    },
    {
        type: 4,
        group: 1,
        lifeTime: 24.92451,
        lineFishes: [{ fishType: 13, points: [[-23, 72, 1], [-135, 198, 2], [-303, 208, 3], [-429, 97, 4], [-439, -70, 5], [-327, -196, 6], [-159, -207, 7], [-33, -95, 8]] },
        { fishType: 24, points: [[-159, 90, 9], [-215, 127, 10], [-100, 51, 11], [-41, 13, 12], [-114, -75, 13], [-158, -126, 14], [-211, -177, 15], [-299, -104, 16], [-357, -63, 17], [-79, -20, 18], [-416, -26, 19], [-327, 52, 20], [-283, 111, 21], [-248, 170, 22], [-231, -141, 23], [-363, -2, 24]] },
        { fishType: 45, points: [[-223, 0, 25]] },
        ]
    },
    {
        type: 5,
        group: 1,
        lifeTime: 24.87712,
        lineFishes: [{ fishType: 11, points: [[-68, 153, 1], [-12, 18, 2], [-56, -120, 3], [-212, -189, 4], [-366, -138, 5], [-432, 9, 6], [-371, 162, 7], [-225, 225, 8]] },
        { fishType: 13, points: [[-45, -17, 9], [-78, -36, 10], [-115, -50, 11], [-82, 110, 12], [-92, 74, 13], [-112, 42, 14], [-190, 152, 15], [-212, 185, 16], [-180, 120, 17], [-343, 152, 18], [-298, 141, 19], [-267, 121, 20], [-421, 34, 21], [-382, 55, 22], [-378, -80, 23], [-386, -115, 24], [-344, 61, 25], [-358, -46, 26], [-253, -172, 27], [-279, -141, 28], [-106, -139, 29], [-152, -135, 30], [-294, -102, 31], [-189, -112, 32]] },
        { fishType: 44, points: [[-231, 3, 33]] },
        ]
    },
    {
        type: 6,
        group: 1,
        lifeTime: 25.95173,
        lineFishes: [{ fishType: 13, points: [[-199, 102, 1], [-163, 125, 2], [-122, 139, 3], [-77, 148, 4], [-340, 132, 5], [-342, 175, 6], [-334, 217, 7], [-319, 261, 8], [-492, 43, 9], [-530, 63, 10], [-563, 91, 11], [-593, 126, 12], [-469, -100, 13], [-505, -123, 14], [-546, -137, 15], [-591, -147, 16], [-333, -136, 17], [-331, -179, 18], [-339, -221, 19], [-353, -265, 20], [-208, -44, 21], [-170, -63, 22], [-137, -92, 23], [-107, -126, 24]] },
        { fishType: 33, points: [[-468, -4, 25], [-188, -4, 26], [-257, 118, 27], [-398, -123, 28], [-405, 117, 29], [-255, -123, 30]] },
        { fishType: 44, points: [[-330, -11, 31]] },
        ]
    },
    {
        type: 7,
        group: 1,
        lifeTime: 25.36996,
        lineFishes: [{ fishType: 24, points: [[-168, 171, 1], [-168, -171, 2], [-225, -140, 3], [-237, 147, 4], [-266, -103, 5], [-273, 108, 6], [-107, 142, 7], [-107, -142, 8], [-66, 98, 9], [-44, 54, 10], [-36, 0, 11], [-437, 139, 12], [-66, -99, 13], [-432, -142, 14], [-478, -114, 15], [-478, 110, 16], [-498, -76, 17], [-44, -51, 18], [-506, -32, 19], [-506, 24, 20], [-498, 72, 21], [-385, 113, 22], [-387, -117, 23], [-334, 85, 24], [-327, -87, 25]] },
        {
            fishType: 53, points: [[-321, 27, 26]]
        },
        ]
    },
    {
        type: 8,
        group: 1,
        lifeTime: 25.22478,
        lineFishes: [{ fishType: 23, points: [[-44, 0, 1], [-57, 75, 2], [-95, 141, 3], [-154, 190, 4], [-225, 216, 5], [-302, 216, 6], [-374, 190, 7], [-432, 141, 8], [-470, 75, 9], [-484, 0, 10], [-471, -74, 11], [-433, -141, 12], [-374, -190, 13], [-302, -216, 14], [-226, -216, 15], [-154, -190, 16], [-96, -141, 17], [-57, -75, 18]] },
        { fishType: 51, points: [[-265, 8, 19]] },
        ]
    },
    {
        type: 9,
        group: 1,
        lifeTime: 26.329,
        lineFishes: [{ fishType: 11, points: [[-527, 40, 1], [-397, 91, 2], [-332, 89, 3], [-263, 59, 4], [-592, 21, 5], [-650, -7, 6], [-586, -33, 7], [-511, -51, 8], [-436, -60, 9], [-358, -50, 10], [-298, -28, 11], [-249, -5, 12], [-460, 64, 13]] },
        { fishType: 13, points: [[-225, -42, 14], [-270, -91, 15], [-324, -135, 16], [-389, -167, 17], [-458, -180, 18], [-536, -171, 19], [-474, -138, 20], [-423, -110, 21], [-274, 80, 22], [-316, 119, 23], [-372, 142, 24], [-434, 150, 25], [-497, 153, 26], [-556, 145, 27], [-608, 106, 28], [-535, 80, 29]] },
        { fishType: 52, points: [[-121, 5, 30]] },
        ]
    },
    {
        type: 16,
        group: 2,
        lifeTime: 22,
        routeIntervalFishes: [
            { routeId: 101, intervalTime: 1, intervalCount: 25, fishType: 24 },
            { routeId: 102, intervalTime: 1, intervalCount: 25, fishType: 24 },
            { routeId: 103, intervalTime: 1, intervalCount: 25, fishType: 13 },
            { routeId: 104, intervalTime: 1, intervalCount: 25, fishType: 13 },
            { routeId: 105, intervalTime: 2.7, intervalCount: 8, fishType: 44 },
        ]
    },
    {
        type: 17,
        group: 3,
        lifeTime: 22,
        midIntervalFishes: {
            intervalTime: 1.5,
            fishCountPerInterval: 18,
            fishTypes: [31, 32, 17, 23, 24]
        }
    },
    {
        type: 18,
        group: 4,
        lifeTime: 22,
        midIntervalFishes: {
            intervalTime: 0.8,
            fishCountPerInterval: 5,
            fishTypes: [11, 12, 13, 24, 11, 12, 13, 24, 11, 12, 13, 24, 11, 12, 13, 24]
        }
    },

    {
        type: 21,
        group: 1,
        lifeTime: 26.03596,
        lineFishes: [
            {
                fishType: 11, points: [[-581, 286, 1], [-501, 286, 2], [-421, 286, 3], [-341, 286, 4], [-261, 286, 5], [-181, 286, 6], [-101, 286, 7], [-21, 286, 8], [59, 286, 9], [139, 286, 10], [219, 286, 11], [299, 286, 12], [379, 286, 13], [459, 286, 14], [539, 286, 15], [-581, -282, 16], [-501, -282, 17], [-421, -282, 18], [-341, -282, 19], [-261, -282, 20], [-181, -282, 21], [-101, -282, 22], [-21, -282, 23], [59, -282, 24], [139, -282, 25], [219, -282, 26], [299, -282, 27], [379, -282, 28], [459, -282, 29], [539, -282, 30]]
            },
            {
                fishType: 12, points: [[-541, 286, 31], [-461, 286, 32], [-381, 286, 33], [-301, 286, 34], [-221, 286, 35], [-141, 286, 36], [-61, 286, 37], [19, 286, 38], [99, 286, 39], [179, 286, 40], [259, 286, 41], [339, 286, 42], [419, 286, 43], [499, 286, 44], [579, 286, 45], [-541, -282, 46], [-461, -282, 47], [-381, -282, 48], [-301, -282, 49], [-221, -282, 50], [-141, -282, 51], [-61, -282, 52], [19, -282, 53], [99, -282, 54], [179, -282, 55], [259, -282, 56], [339, -282, 57], [419, -282, 58], [499, -282, 59], [579, -282, 60]]
            },
            {
                fishType: 14, points: [[-478, 241.5, 61], [-510, 137.5, 62], [-542, 33.5, 63], [-574, -70.5, 64], [-606, -174.5, 65], [-421.5, 137.5, 66], [-389.5, 33.5, 67], [-357.5, -70.5, 68], [-325.5, -174.5, 69], [-194.5, 182.5, 70], [-226.5, 78.5, 71], [-258.5, -25.5, 72], [-290.5, -129.5, 73], [-131.5, 182.5, 74], [-99.5, 78.5, 75], [-67.5, -25.5, 76], [-35.5, -129.5, 77], [464.5, 182.5, 78], [496.5, 78.5, 79], [528.5, -25.5, 80], [560.5, -129.5, 81], [401.5, 182.5, 82], [369.5, 78.5, 83], [337.5, -25.5, 84], [305.5, -129.5, 85], [174.5, 137.5, 86], [206.5, 33.5, 87], [238.5, -70.5, 88], [270.5, -174.5, 89], [118, 241.5, 90], [86, 137.5, 91], [54, 33.5, 92], [22, -70.5, 93]]
            },
            {
                fishType: 13, points: [[-494, 189.5, 94], [-526, 85.5, 95], [-558, -18.5, 96], [-590, -122.5, 97], [-437.5, 189.5, 98], [-405.5, 85.5, 99], [-373.5, -18.5, 100], [-341.5, -122.5, 101], [-178.5, 234.5, 102], [-210.5, 130.5, 103], [-242.5, 26.5, 104], [-274.5, -77.5, 105], [-115.5, 130.5, 106], [-83.5, 26.5, 107], [-51.5, -77.5, 108], [-19.5, -181.5, 109], [480.5, 130.5, 110], [512.5, 26.5, 111], [544.5, -77.5, 112], [576.5, -181.5, 113], [417.5, 234.5, 114], [385.5, 130.5, 115], [353.5, 26.5, 116], [321.5, -77.5, 117], [158.5, 189.5, 118], [190.5, 85.5, 119], [222.5, -18.5, 120], [254.5, -122.5, 121], [102, 189.5, 122], [70, 85.5, 123], [38, -18.5, 124], [6, -122.5, 125]]
            }]
    },

    {
        type: 22,
        group: 1,
        lifeTime: 26.11588,
        lineFishes: [
            { fishType: 15, points: [[479, 171, 1], [529, 171, 2], [563, 135, 3], [605, 99, 4], [647, 63, 5], [673, 33, 6], [426, 171, 7], [392, 135, 8], [350, 99, 9], [308, 63, 10], [281, 33, 11], [652, 3, 12], [628, -33, 13], [604, -69, 14], [580, -105, 15], [556, -141, 16], [532, -177, 17], [508, -213, 18], [307, 3, 19], [331, -33, 20], [355, -69, 21], [379, -105, 22], [403, -141, 23], [427, -177, 24], [451, -213, 25], [475, -249, 26]] },
            { fishType: 45, points: [[470, 10, 27]] },
            { fishType: 13, points: [[22, 171, 28], [72, 171, 29], [106, 135, 30], [148, 99, 31], [190, 63, 32], [216, 33, 33], [-31, 171, 34], [-65, 135, 35], [-107, 99, 36], [-149, 63, 37], [-176, 33, 38], [195, 3, 39], [171, -33, 40], [147, -69, 41], [123, -105, 42], [99, -141, 43], [75, -177, 44], [51, -213, 45], [-150, 3, 46], [-126, -33, 47], [-102, -69, 48], [-78, -105, 49], [-54, -141, 50], [-30, -177, 51], [-6, -213, 52], [18, -249, 53]] },
            { fishType: 44, points: [[13, 10, 54]] },
            { fishType: 12, points: [[-420, 171, 55], [-370, 171, 56], [-336, 135, 57], [-294, 99, 58], [-252, 63, 59], [-226, 33, 60], [-473, 171, 61], [-507, 135, 62], [-549, 99, 63], [-591, 63, 64], [-618, 33, 65], [-247, 3, 66], [-271, -33, 67], [-295, -69, 68], [-319, -105, 69], [-343, -141, 70], [-367, -177, 71], [-391, -213, 72], [-592, 3, 73], [-568, -33, 74], [-544, -69, 75], [-520, -105, 76], [-496, -141, 77], [-472, -177, 78], [-448, -213, 79], [-424, -249, 80]] },
            { fishType: 42, points: [[-429, 10, 81]] }]
    },
    {
        type: 23,
        group: 2,
        lifeTime: 22,
        routeIntervalFishes: [
            { routeId: 110, intervalTime: 1.8, intervalCount: 20, fishType: 11, startTime: 0 },
            { routeId: 110, intervalTime: 1.8, intervalCount: 20, fishType: 12, startTime: 0.6 },
            { routeId: 110, intervalTime: 1.8, intervalCount: 20, fishType: 13, startTime: 1.2 },

            { routeId: 111, intervalTime: 1.8, intervalCount: 20, fishType: 11, startTime: 0 },
            { routeId: 111, intervalTime: 1.8, intervalCount: 20, fishType: 12, startTime: 0.6 },
            { routeId: 111, intervalTime: 1.8, intervalCount: 20, fishType: 13, startTime: 1.2 },

            { routeId: 112, intervalTime: 0, intervalCount: 1, fishType: 42, startTime: 7.2 },
            { routeId: 112, intervalTime: 0, intervalCount: 1, fishType: 43, startTime: 14.4 },
            { routeId: 112, intervalTime: 0, intervalCount: 1, fishType: 44, startTime: 21.6 },
            { routeId: 112, intervalTime: 0, intervalCount: 1, fishType: 45, startTime: 28.8 },


        ]
    },

    {
        type: 24,
        group: 2,
        lifeTime: 22,
        routeIntervalFishes: [
            { routeId: 113, intervalTime: 1.8, intervalCount: 20, fishType: 12, startTime: 0 },
            { routeId: 113, intervalTime: 1.8, intervalCount: 20, fishType: 13, startTime: 0.45 },
            { routeId: 113, intervalTime: 1.8, intervalCount: 20, fishType: 14, startTime: 0.9 },
            { routeId: 113, intervalTime: 1.8, intervalCount: 20, fishType: 15, startTime: 1.35 },

            { routeId: 114, intervalTime: 1.8, intervalCount: 20, fishType: 12, startTime: 0 },
            { routeId: 114, intervalTime: 1.8, intervalCount: 20, fishType: 13, startTime: 0.45 },
            { routeId: 114, intervalTime: 1.8, intervalCount: 20, fishType: 14, startTime: 0.9 },
            { routeId: 114, intervalTime: 1.8, intervalCount: 20, fishType: 15, startTime: 1.35 },

            { routeId: 115, intervalTime: 1.8, intervalCount: 20, fishType: 15, startTime: 0 },
            { routeId: 115, intervalTime: 1.8, intervalCount: 20, fishType: 16, startTime: 0.6 },
            { routeId: 115, intervalTime: 1.8, intervalCount: 20, fishType: 17, startTime: 1.2 },


            { routeId: 116, intervalTime: 1.8, intervalCount: 20, fishType: 15, startTime: 0 },
            { routeId: 116, intervalTime: 1.8, intervalCount: 20, fishType: 16, startTime: 0.6 },
            { routeId: 116, intervalTime: 1.8, intervalCount: 20, fishType: 17, startTime: 1.2 },


        ]
    },


]
