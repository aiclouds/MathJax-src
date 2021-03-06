/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CHTMLCharMap, AddCSS} from '../../FontData.js';
import {normal as font} from '../../../common/fonts/tex/normal.js';

export const normal: CHTMLCharMap = AddCSS(font, {
    0x20: {c: ' '},
    0x21: {c: '!'},
    0x23: {c: '#'},
    0x24: {c: '$'},
    0x25: {c: '%'},
    0x26: {c: '&'},
    0x28: {c: '('},
    0x29: {c: ')'},
    0x2A: {c: '*'},
    0x2B: {c: '+'},
    0x2C: {c: ','},
    0x2D: {c: '-'},
    0x2E: {c: '.'},
    0x2F: {c: '/'},
    0x30: {c: '0'},
    0x31: {c: '1'},
    0x32: {c: '2'},
    0x33: {c: '3'},
    0x34: {c: '4'},
    0x35: {c: '5'},
    0x36: {c: '6'},
    0x37: {c: '7'},
    0x38: {c: '8'},
    0x39: {c: '9'},
    0x3A: {c: ':'},
    0x3B: {c: ';'},
    0x3C: {c: '<'},
    0x3D: {c: '='},
    0x3E: {c: '>'},
    0x3F: {c: '?'},
    0x40: {c: '@'},
    0x41: {c: 'A'},
    0x42: {c: 'B'},
    0x43: {c: 'C'},
    0x44: {c: 'D'},
    0x45: {c: 'E'},
    0x46: {c: 'F'},
    0x47: {c: 'G'},
    0x48: {c: 'H'},
    0x49: {c: 'I'},
    0x4A: {c: 'J'},
    0x4B: {c: 'K'},
    0x4C: {c: 'L'},
    0x4D: {c: 'M'},
    0x4E: {c: 'N'},
    0x4F: {c: 'O'},
    0x50: {c: 'P'},
    0x51: {c: 'Q'},
    0x52: {c: 'R'},
    0x53: {c: 'S'},
    0x54: {c: 'T'},
    0x55: {c: 'U'},
    0x56: {c: 'V'},
    0x57: {c: 'W'},
    0x58: {c: 'X'},
    0x59: {c: 'Y'},
    0x5A: {c: 'Z'},
    0x5B: {c: '['},
    0x5D: {c: ']'},
    0x5E: {c: '^'},
    0x5F: {c: '_'},
    0x60: {c: '`'},
    0x61: {c: 'a'},
    0x62: {c: 'b'},
    0x63: {c: 'c'},
    0x64: {c: 'd'},
    0x65: {c: 'e'},
    0x66: {c: 'f'},
    0x67: {c: 'g'},
    0x68: {c: 'h'},
    0x69: {c: 'i'},
    0x6A: {c: 'j'},
    0x6B: {c: 'k'},
    0x6C: {c: 'l'},
    0x6D: {c: 'm'},
    0x6E: {c: 'n'},
    0x6F: {c: 'o'},
    0x70: {c: 'p'},
    0x71: {c: 'q'},
    0x72: {c: 'r'},
    0x73: {c: 's'},
    0x74: {c: 't'},
    0x75: {c: 'u'},
    0x76: {c: 'v'},
    0x77: {c: 'w'},
    0x78: {c: 'x'},
    0x79: {c: 'y'},
    0x7A: {c: 'z'},
    0x7B: {c: '{'},
    0x7C: {c: '|'},
    0x7D: {c: '}'},
    0x7E: {c: '~'},
    0xA3: {f: 'MI'},
    0xB7: {c: '\\22C5'},
    0x2B9: {c: '\\2032'},
    0x391: {c: 'A'},
    0x392: {c: 'B'},
    0x395: {c: 'E'},
    0x396: {c: 'Z'},
    0x397: {c: 'H'},
    0x399: {c: 'I'},
    0x39A: {c: 'K'},
    0x39C: {c: 'M'},
    0x39D: {c: 'N'},
    0x39F: {c: 'O'},
    0x3A1: {c: 'P'},
    0x3A2: {c: '\\398'},
    0x3A4: {c: 'T'},
    0x3A7: {c: 'X'},
    0x3D2: {c: '\\3A5'},
    0x3DC: {c: 'F'},
    0x3F6: {c: '\\220D'},
    0x2000: {c: ''},
    0x2001: {c: ''},
    0x2002: {c: ''},
    0x2003: {c: ''},
    0x2004: {c: ''},
    0x2005: {c: ''},
    0x2006: {c: ''},
    0x2009: {c: ''},
    0x200A: {c: ''},
    0x200B: {c: ''},
    0x200C: {c: ''},
    0x2015: {c: '\\2014'},
    0x2016: {c: '\\2225'},
    0x2017: {c: '_'},
    0x2022: {c: '\\2219'},
    0x2033: {c: '\\2032\\2032'},
    0x2034: {c: '\\2032\\2032\\2032'},
    0x2036: {c: '\\2035\\2035'},
    0x2037: {c: '\\2035\\2035\\2035'},
    0x203E: {c: '\\2C9'},
    0x2044: {c: '/'},
    0x2057: {c: '\\2032\\2032\\2032\\2032'},
    0x2061: {c: ''},
    0x2062: {c: ''},
    0x2063: {c: ''},
    0x2064: {c: ''},
    0x20D7: {c: '\\2192', f: 'V'},
    0x2102: {c: 'C', f: 'A'},
    0x210B: {c: 'H', f: 'SC'},
    0x210C: {c: 'H', f: 'FR'},
    0x210D: {c: 'H', f: 'A'},
    0x210E: {c: 'h', f: 'I'},
    0x210F: {f: ''},
    0x2110: {c: 'J', f: 'SC'},
    0x2111: {c: 'I', f: 'FR'},
    0x2112: {c: 'L', f: 'SC'},
    0x2115: {c: 'N', f: 'A'},
    0x2119: {c: 'P', f: 'A'},
    0x211A: {c: 'Q', f: 'A'},
    0x211B: {c: 'R', f: 'SC'},
    0x211C: {c: 'R', f: 'FR'},
    0x211D: {c: 'R', f: 'A'},
    0x2124: {c: 'Z', f: 'A'},
    0x2126: {c: '\\3A9', f: ''},
    0x2128: {c: 'Z', f: 'FR'},
    0x212C: {c: 'B', f: 'SC'},
    0x212D: {c: 'C', f: 'FR'},
    0x2130: {c: 'E', f: 'SC'},
    0x2131: {c: 'F', f: 'SC'},
    0x2133: {c: 'M', f: 'SC'},
    0x2204: {c: '\\2203\\338'},
    0x2206: {c: '\\394'},
    0x220C: {c: '\\220B\\338'},
    0x2216: {f: ''},
    0x2244: {c: '\\2243\\338'},
    0x2247: {c: '\\2246'},
    0x2249: {c: '\\2248\\338'},
    0x2262: {c: '\\2261\\338'},
    0x226D: {c: '\\224D\\338'},
    0x2274: {c: '\\2272\\338'},
    0x2275: {c: '\\2273\\338'},
    0x2278: {c: '\\2276\\338'},
    0x2279: {c: '\\2277\\338'},
    0x2284: {c: '\\2282\\338'},
    0x2285: {c: '\\2283\\338'},
    0x22E2: {c: '\\2291\\338'},
    0x22E3: {c: '\\2292\\338'},
    0x2305: {c: '\\22BC'},
    0x2306: {c: '\\2A5E'},
    0x231C: {c: '\\250C'},
    0x231D: {c: '\\2510'},
    0x231E: {c: '\\2514'},
    0x231F: {c: '\\2518'},
    0x2329: {c: '\\27E8'},
    0x232A: {c: '\\27E9'},
    0x25AA: {c: '\\25A0'},
    0x25B4: {c: '\\25B2'},
    0x25B5: {c: '\\25B3'},
    0x25B8: {c: '\\25B6'},
    0x25BE: {c: '\\25BC'},
    0x25BF: {c: '\\25BD'},
    0x25C2: {c: '\\25C0'},
    0x25FB: {c: '\\25A1'},
    0x25FC: {c: '\\25A0'},
    0x2758: {c: '\\2223'},
    0x29F8: {c: '/', f: 'I'},
    0x2A0C: {c: '\\222C\\222C'},
    0x2A2F: {c: '\\D7'},
    0x3008: {c: '\\27E8'},
    0x3009: {c: '\\27E9'},
    0x1D400: {c: 'A', f: 'B'},
    0x1D401: {c: 'B', f: 'B'},
    0x1D402: {c: 'C', f: 'B'},
    0x1D403: {c: 'D', f: 'B'},
    0x1D404: {c: 'E', f: 'B'},
    0x1D405: {c: 'F', f: 'B'},
    0x1D406: {c: 'G', f: 'B'},
    0x1D407: {c: 'H', f: 'B'},
    0x1D408: {c: 'I', f: 'B'},
    0x1D409: {c: 'J', f: 'B'},
    0x1D40A: {c: 'K', f: 'B'},
    0x1D40B: {c: 'L', f: 'B'},
    0x1D40C: {c: 'M', f: 'B'},
    0x1D40D: {c: 'N', f: 'B'},
    0x1D40E: {c: 'O', f: 'B'},
    0x1D40F: {c: 'P', f: 'B'},
    0x1D410: {c: 'Q', f: 'B'},
    0x1D411: {c: 'R', f: 'B'},
    0x1D412: {c: 'S', f: 'B'},
    0x1D413: {c: 'T', f: 'B'},
    0x1D414: {c: 'U', f: 'B'},
    0x1D415: {c: 'V', f: 'B'},
    0x1D416: {c: 'W', f: 'B'},
    0x1D417: {c: 'X', f: 'B'},
    0x1D418: {c: 'Y', f: 'B'},
    0x1D419: {c: 'Z', f: 'B'},
    0x1D41A: {c: 'a', f: 'B'},
    0x1D41B: {c: 'b', f: 'B'},
    0x1D41C: {c: 'c', f: 'B'},
    0x1D41D: {c: 'd', f: 'B'},
    0x1D41E: {c: 'e', f: 'B'},
    0x1D41F: {c: 'f', f: 'B'},
    0x1D420: {c: 'g', f: 'B'},
    0x1D421: {c: 'h', f: 'B'},
    0x1D422: {c: 'i', f: 'B'},
    0x1D423: {c: 'j', f: 'B'},
    0x1D424: {c: 'k', f: 'B'},
    0x1D425: {c: 'l', f: 'B'},
    0x1D426: {c: 'm', f: 'B'},
    0x1D427: {c: 'n', f: 'B'},
    0x1D428: {c: 'o', f: 'B'},
    0x1D429: {c: 'p', f: 'B'},
    0x1D42A: {c: 'q', f: 'B'},
    0x1D42B: {c: 'r', f: 'B'},
    0x1D42C: {c: 's', f: 'B'},
    0x1D42D: {c: 't', f: 'B'},
    0x1D42E: {c: 'u', f: 'B'},
    0x1D42F: {c: 'v', f: 'B'},
    0x1D430: {c: 'w', f: 'B'},
    0x1D431: {c: 'x', f: 'B'},
    0x1D432: {c: 'y', f: 'B'},
    0x1D433: {c: 'z', f: 'B'},
    0x1D434: {c: 'A', f: 'I'},
    0x1D435: {c: 'B', f: 'I'},
    0x1D436: {c: 'C', f: 'I'},
    0x1D437: {c: 'D', f: 'I'},
    0x1D438: {c: 'E', f: 'I'},
    0x1D439: {c: 'F', f: 'I'},
    0x1D43A: {c: 'G', f: 'I'},
    0x1D43B: {c: 'H', f: 'I'},
    0x1D43C: {c: 'I', f: 'I'},
    0x1D43D: {c: 'J', f: 'I'},
    0x1D43E: {c: 'K', f: 'I'},
    0x1D43F: {c: 'L', f: 'I'},
    0x1D440: {c: 'M', f: 'I'},
    0x1D441: {c: 'N', f: 'I'},
    0x1D442: {c: 'O', f: 'I'},
    0x1D443: {c: 'P', f: 'I'},
    0x1D444: {c: 'Q', f: 'I'},
    0x1D445: {c: 'R', f: 'I'},
    0x1D446: {c: 'S', f: 'I'},
    0x1D447: {c: 'T', f: 'I'},
    0x1D448: {c: 'U', f: 'I'},
    0x1D449: {c: 'V', f: 'I'},
    0x1D44A: {c: 'W', f: 'I'},
    0x1D44B: {c: 'X', f: 'I'},
    0x1D44C: {c: 'Y', f: 'I'},
    0x1D44D: {c: 'Z', f: 'I'},
    0x1D44E: {c: 'a', f: 'I'},
    0x1D44F: {c: 'b', f: 'I'},
    0x1D450: {c: 'c', f: 'I'},
    0x1D451: {c: 'd', f: 'I'},
    0x1D452: {c: 'e', f: 'I'},
    0x1D453: {c: 'f', f: 'I'},
    0x1D454: {c: 'g', f: 'I'},
    0x1D455: {c: 'h', f: 'I'},
    0x1D456: {c: 'i', f: 'I'},
    0x1D457: {c: 'j', f: 'I'},
    0x1D458: {c: 'k', f: 'I'},
    0x1D459: {c: 'l', f: 'I'},
    0x1D45A: {c: 'm', f: 'I'},
    0x1D45B: {c: 'n', f: 'I'},
    0x1D45C: {c: 'o', f: 'I'},
    0x1D45D: {c: 'p', f: 'I'},
    0x1D45E: {c: 'q', f: 'I'},
    0x1D45F: {c: 'r', f: 'I'},
    0x1D460: {c: 's', f: 'I'},
    0x1D461: {c: 't', f: 'I'},
    0x1D462: {c: 'u', f: 'I'},
    0x1D463: {c: 'v', f: 'I'},
    0x1D464: {c: 'w', f: 'I'},
    0x1D465: {c: 'x', f: 'I'},
    0x1D466: {c: 'y', f: 'I'},
    0x1D467: {c: 'z', f: 'I'},
    0x1D468: {c: 'A', f: 'BI'},
    0x1D469: {c: 'B', f: 'BI'},
    0x1D46A: {c: 'C', f: 'BI'},
    0x1D46B: {c: 'D', f: 'BI'},
    0x1D46C: {c: 'E', f: 'BI'},
    0x1D46D: {c: 'F', f: 'BI'},
    0x1D46E: {c: 'G', f: 'BI'},
    0x1D46F: {c: 'H', f: 'BI'},
    0x1D470: {c: 'I', f: 'BI'},
    0x1D471: {c: 'J', f: 'BI'},
    0x1D472: {c: 'K', f: 'BI'},
    0x1D473: {c: 'L', f: 'BI'},
    0x1D474: {c: 'M', f: 'BI'},
    0x1D475: {c: 'N', f: 'BI'},
    0x1D476: {c: 'O', f: 'BI'},
    0x1D477: {c: 'P', f: 'BI'},
    0x1D478: {c: 'Q', f: 'BI'},
    0x1D479: {c: 'R', f: 'BI'},
    0x1D47A: {c: 'S', f: 'BI'},
    0x1D47B: {c: 'T', f: 'BI'},
    0x1D47C: {c: 'U', f: 'BI'},
    0x1D47D: {c: 'V', f: 'BI'},
    0x1D47E: {c: 'W', f: 'BI'},
    0x1D47F: {c: 'X', f: 'BI'},
    0x1D480: {c: 'Y', f: 'BI'},
    0x1D481: {c: 'Z', f: 'BI'},
    0x1D482: {c: 'a', f: 'BI'},
    0x1D483: {c: 'b', f: 'BI'},
    0x1D484: {c: 'c', f: 'BI'},
    0x1D485: {c: 'd', f: 'BI'},
    0x1D486: {c: 'e', f: 'BI'},
    0x1D487: {c: 'f', f: 'BI'},
    0x1D488: {c: 'g', f: 'BI'},
    0x1D489: {c: 'h', f: 'BI'},
    0x1D48A: {c: 'i', f: 'BI'},
    0x1D48B: {c: 'j', f: 'BI'},
    0x1D48C: {c: 'k', f: 'BI'},
    0x1D48D: {c: 'l', f: 'BI'},
    0x1D48E: {c: 'm', f: 'BI'},
    0x1D48F: {c: 'n', f: 'BI'},
    0x1D490: {c: 'o', f: 'BI'},
    0x1D491: {c: 'p', f: 'BI'},
    0x1D492: {c: 'q', f: 'BI'},
    0x1D493: {c: 'r', f: 'BI'},
    0x1D494: {c: 's', f: 'BI'},
    0x1D495: {c: 't', f: 'BI'},
    0x1D496: {c: 'u', f: 'BI'},
    0x1D497: {c: 'v', f: 'BI'},
    0x1D498: {c: 'w', f: 'BI'},
    0x1D499: {c: 'x', f: 'BI'},
    0x1D49A: {c: 'y', f: 'BI'},
    0x1D49B: {c: 'z', f: 'BI'},
    0x1D49C: {c: 'A', f: 'SC'},
    0x1D49D: {c: 'B', f: 'SC'},
    0x1D49E: {c: 'C', f: 'SC'},
    0x1D49F: {c: 'D', f: 'SC'},
    0x1D4A0: {c: 'E', f: 'SC'},
    0x1D4A1: {c: 'F', f: 'SC'},
    0x1D4A2: {c: 'G', f: 'SC'},
    0x1D4A3: {c: 'H', f: 'SC'},
    0x1D4A4: {c: 'I', f: 'SC'},
    0x1D4A5: {c: 'J', f: 'SC'},
    0x1D4A6: {c: 'K', f: 'SC'},
    0x1D4A7: {c: 'L', f: 'SC'},
    0x1D4A8: {c: 'M', f: 'SC'},
    0x1D4A9: {c: 'N', f: 'SC'},
    0x1D4AA: {c: 'O', f: 'SC'},
    0x1D4AB: {c: 'P', f: 'SC'},
    0x1D4AC: {c: 'Q', f: 'SC'},
    0x1D4AD: {c: 'R', f: 'SC'},
    0x1D4AE: {c: 'S', f: 'SC'},
    0x1D4AF: {c: 'T', f: 'SC'},
    0x1D4B0: {c: 'U', f: 'SC'},
    0x1D4B1: {c: 'V', f: 'SC'},
    0x1D4B2: {c: 'W', f: 'SC'},
    0x1D4B3: {c: 'X', f: 'SC'},
    0x1D4B4: {c: 'Y', f: 'SC'},
    0x1D4B5: {c: 'Z', f: 'SC'},
    0x1D4B6: {c: 'a', f: 'I'},
    0x1D4B7: {c: 'b', f: 'I'},
    0x1D4B8: {c: 'c', f: 'I'},
    0x1D4B9: {c: 'd', f: 'I'},
    0x1D4BA: {c: 'e', f: 'I'},
    0x1D4BB: {c: 'f', f: 'I'},
    0x1D4BC: {c: 'g', f: 'I'},
    0x1D4BD: {c: 'h', f: 'I'},
    0x1D4BE: {c: 'i', f: 'I'},
    0x1D4BF: {c: 'j', f: 'I'},
    0x1D4C0: {c: 'k', f: 'I'},
    0x1D4C1: {c: 'l', f: 'I'},
    0x1D4C2: {c: 'm', f: 'I'},
    0x1D4C3: {c: 'n', f: 'I'},
    0x1D4C4: {c: 'o', f: 'I'},
    0x1D4C5: {c: 'p', f: 'I'},
    0x1D4C6: {c: 'q', f: 'I'},
    0x1D4C7: {c: 'r', f: 'I'},
    0x1D4C8: {c: 's', f: 'I'},
    0x1D4C9: {c: 't', f: 'I'},
    0x1D4CA: {c: 'u', f: 'I'},
    0x1D4CB: {c: 'v', f: 'I'},
    0x1D4CC: {c: 'w', f: 'I'},
    0x1D4CD: {c: 'x', f: 'I'},
    0x1D4CE: {c: 'y', f: 'I'},
    0x1D4CF: {c: 'z', f: 'I'},
    0x1D4D0: {c: 'A', f: 'SC'},
    0x1D4D1: {c: 'B', f: 'SC'},
    0x1D4D2: {c: 'C', f: 'SC'},
    0x1D4D3: {c: 'D', f: 'SC'},
    0x1D4D4: {c: 'E', f: 'SC'},
    0x1D4D5: {c: 'F', f: 'SC'},
    0x1D4D6: {c: 'G', f: 'SC'},
    0x1D4D7: {c: 'H', f: 'SC'},
    0x1D4D8: {c: 'I', f: 'SC'},
    0x1D4D9: {c: 'J', f: 'SC'},
    0x1D4DA: {c: 'K', f: 'SC'},
    0x1D4DB: {c: 'L', f: 'SC'},
    0x1D4DC: {c: 'M', f: 'SC'},
    0x1D4DD: {c: 'N', f: 'SC'},
    0x1D4DE: {c: 'O', f: 'SC'},
    0x1D4DF: {c: 'P', f: 'SC'},
    0x1D4E0: {c: 'Q', f: 'SC'},
    0x1D4E1: {c: 'R', f: 'SC'},
    0x1D4E2: {c: 'S', f: 'SC'},
    0x1D4E3: {c: 'T', f: 'SC'},
    0x1D4E4: {c: 'U', f: 'SC'},
    0x1D4E5: {c: 'V', f: 'SC'},
    0x1D4E6: {c: 'W', f: 'SC'},
    0x1D4E7: {c: 'X', f: 'SC'},
    0x1D4E8: {c: 'Y', f: 'SC'},
    0x1D4E9: {c: 'Z', f: 'SC'},
    0x1D4EA: {c: 'a', f: 'BI'},
    0x1D4EB: {c: 'b', f: 'BI'},
    0x1D4EC: {c: 'c', f: 'BI'},
    0x1D4ED: {c: 'd', f: 'BI'},
    0x1D4EE: {c: 'e', f: 'BI'},
    0x1D4EF: {c: 'f', f: 'BI'},
    0x1D4F0: {c: 'g', f: 'BI'},
    0x1D4F1: {c: 'h', f: 'BI'},
    0x1D4F2: {c: 'i', f: 'BI'},
    0x1D4F3: {c: 'j', f: 'BI'},
    0x1D4F4: {c: 'k', f: 'BI'},
    0x1D4F5: {c: 'l', f: 'BI'},
    0x1D4F6: {c: 'm', f: 'BI'},
    0x1D4F7: {c: 'n', f: 'BI'},
    0x1D4F8: {c: 'o', f: 'BI'},
    0x1D4F9: {c: 'p', f: 'BI'},
    0x1D4FA: {c: 'q', f: 'BI'},
    0x1D4FB: {c: 'r', f: 'BI'},
    0x1D4FC: {c: 's', f: 'BI'},
    0x1D4FD: {c: 't', f: 'BI'},
    0x1D4FE: {c: 'u', f: 'BI'},
    0x1D4FF: {c: 'v', f: 'BI'},
    0x1D500: {c: 'w', f: 'BI'},
    0x1D501: {c: 'x', f: 'BI'},
    0x1D502: {c: 'y', f: 'BI'},
    0x1D503: {c: 'z', f: 'BI'},
    0x1D504: {c: 'A', f: 'FR'},
    0x1D505: {c: 'B', f: 'FR'},
    0x1D506: {c: 'C', f: 'FR'},
    0x1D507: {c: 'D', f: 'FR'},
    0x1D508: {c: 'E', f: 'FR'},
    0x1D509: {c: 'F', f: 'FR'},
    0x1D50A: {c: 'G', f: 'FR'},
    0x1D50B: {c: 'H', f: 'FR'},
    0x1D50C: {c: 'I', f: 'FR'},
    0x1D50D: {c: 'J', f: 'FR'},
    0x1D50E: {c: 'K', f: 'FR'},
    0x1D50F: {c: 'L', f: 'FR'},
    0x1D510: {c: 'M', f: 'FR'},
    0x1D511: {c: 'N', f: 'FR'},
    0x1D512: {c: 'O', f: 'FR'},
    0x1D513: {c: 'P', f: 'FR'},
    0x1D514: {c: 'Q', f: 'FR'},
    0x1D515: {c: 'R', f: 'FR'},
    0x1D516: {c: 'S', f: 'FR'},
    0x1D517: {c: 'T', f: 'FR'},
    0x1D518: {c: 'U', f: 'FR'},
    0x1D519: {c: 'V', f: 'FR'},
    0x1D51A: {c: 'W', f: 'FR'},
    0x1D51B: {c: 'X', f: 'FR'},
    0x1D51C: {c: 'Y', f: 'FR'},
    0x1D51D: {c: 'Z', f: 'FR'},
    0x1D51E: {c: 'a', f: 'FR'},
    0x1D51F: {c: 'b', f: 'FR'},
    0x1D520: {c: 'c', f: 'FR'},
    0x1D521: {c: 'd', f: 'FR'},
    0x1D522: {c: 'e', f: 'FR'},
    0x1D523: {c: 'f', f: 'FR'},
    0x1D524: {c: 'g', f: 'FR'},
    0x1D525: {c: 'h', f: 'FR'},
    0x1D526: {c: 'i', f: 'FR'},
    0x1D527: {c: 'j', f: 'FR'},
    0x1D528: {c: 'k', f: 'FR'},
    0x1D529: {c: 'l', f: 'FR'},
    0x1D52A: {c: 'm', f: 'FR'},
    0x1D52B: {c: 'n', f: 'FR'},
    0x1D52C: {c: 'o', f: 'FR'},
    0x1D52D: {c: 'p', f: 'FR'},
    0x1D52E: {c: 'q', f: 'FR'},
    0x1D52F: {c: 'r', f: 'FR'},
    0x1D530: {c: 's', f: 'FR'},
    0x1D531: {c: 't', f: 'FR'},
    0x1D532: {c: 'u', f: 'FR'},
    0x1D533: {c: 'v', f: 'FR'},
    0x1D534: {c: 'w', f: 'FR'},
    0x1D535: {c: 'x', f: 'FR'},
    0x1D536: {c: 'y', f: 'FR'},
    0x1D537: {c: 'z', f: 'FR'},
    0x1D538: {c: 'A', f: 'A'},
    0x1D539: {c: 'B', f: 'A'},
    0x1D53A: {c: 'C', f: 'A'},
    0x1D53B: {c: 'D', f: 'A'},
    0x1D53C: {c: 'E', f: 'A'},
    0x1D53D: {c: 'F', f: 'A'},
    0x1D53E: {c: 'G', f: 'A'},
    0x1D53F: {c: 'H', f: 'A'},
    0x1D540: {c: 'I', f: 'A'},
    0x1D541: {c: 'J', f: 'A'},
    0x1D542: {c: 'K', f: 'A'},
    0x1D543: {c: 'L', f: 'A'},
    0x1D544: {c: 'M', f: 'A'},
    0x1D545: {c: 'N', f: 'A'},
    0x1D546: {c: 'O', f: 'A'},
    0x1D547: {c: 'P', f: 'A'},
    0x1D548: {c: 'Q', f: 'A'},
    0x1D549: {c: 'R', f: 'A'},
    0x1D54A: {c: 'S', f: 'A'},
    0x1D54B: {c: 'T', f: 'A'},
    0x1D54C: {c: 'U', f: 'A'},
    0x1D54D: {c: 'V', f: 'A'},
    0x1D54E: {c: 'W', f: 'A'},
    0x1D54F: {c: 'X', f: 'A'},
    0x1D550: {c: 'Y', f: 'A'},
    0x1D551: {c: 'Z', f: 'A'},
    0x1D552: {c: 'a', f: 'B'},
    0x1D553: {c: 'b', f: 'B'},
    0x1D554: {c: 'c', f: 'B'},
    0x1D555: {c: 'd', f: 'B'},
    0x1D556: {c: 'e', f: 'B'},
    0x1D557: {c: 'f', f: 'B'},
    0x1D558: {c: 'g', f: 'B'},
    0x1D559: {c: 'h', f: 'B'},
    0x1D55A: {c: 'i', f: 'B'},
    0x1D55B: {c: 'j', f: 'B'},
    0x1D55C: {c: 'k', f: 'A'},
    0x1D55D: {c: 'l', f: 'B'},
    0x1D55E: {c: 'm', f: 'B'},
    0x1D55F: {c: 'n', f: 'B'},
    0x1D560: {c: 'o', f: 'B'},
    0x1D561: {c: 'p', f: 'B'},
    0x1D562: {c: 'q', f: 'B'},
    0x1D563: {c: 'r', f: 'B'},
    0x1D564: {c: 's', f: 'B'},
    0x1D565: {c: 't', f: 'B'},
    0x1D566: {c: 'u', f: 'B'},
    0x1D567: {c: 'v', f: 'B'},
    0x1D568: {c: 'w', f: 'B'},
    0x1D569: {c: 'x', f: 'B'},
    0x1D56A: {c: 'y', f: 'B'},
    0x1D56B: {c: 'z', f: 'B'},
    0x1D56C: {c: 'A', f: 'FR-B'},
    0x1D56D: {c: 'B', f: 'FR-B'},
    0x1D56E: {c: 'C', f: 'FR-B'},
    0x1D56F: {c: 'D', f: 'FR-B'},
    0x1D570: {c: 'E', f: 'FR-B'},
    0x1D571: {c: 'F', f: 'FR-B'},
    0x1D572: {c: 'G', f: 'FR-B'},
    0x1D573: {c: 'H', f: 'FR-B'},
    0x1D574: {c: 'I', f: 'FR-B'},
    0x1D575: {c: 'J', f: 'FR-B'},
    0x1D576: {c: 'K', f: 'FR-B'},
    0x1D577: {c: 'L', f: 'FR-B'},
    0x1D578: {c: 'M', f: 'FR-B'},
    0x1D579: {c: 'N', f: 'FR-B'},
    0x1D57A: {c: 'O', f: 'FR-B'},
    0x1D57B: {c: 'P', f: 'FR-B'},
    0x1D57C: {c: 'Q', f: 'FR-B'},
    0x1D57D: {c: 'R', f: 'FR-B'},
    0x1D57E: {c: 'S', f: 'FR-B'},
    0x1D57F: {c: 'T', f: 'FR-B'},
    0x1D580: {c: 'U', f: 'FR-B'},
    0x1D581: {c: 'V', f: 'FR-B'},
    0x1D582: {c: 'W', f: 'FR-B'},
    0x1D583: {c: 'X', f: 'FR-B'},
    0x1D584: {c: 'Y', f: 'FR-B'},
    0x1D585: {c: 'Z', f: 'FR-B'},
    0x1D586: {c: 'a', f: 'FR-B'},
    0x1D587: {c: 'b', f: 'FR-B'},
    0x1D588: {c: 'c', f: 'FR-B'},
    0x1D589: {c: 'd', f: 'FR-B'},
    0x1D58A: {c: 'e', f: 'FR-B'},
    0x1D58B: {c: 'f', f: 'FR-B'},
    0x1D58C: {c: 'g', f: 'FR-B'},
    0x1D58D: {c: 'h', f: 'FR-B'},
    0x1D58E: {c: 'i', f: 'FR-B'},
    0x1D58F: {c: 'j', f: 'FR-B'},
    0x1D590: {c: 'k', f: 'FR-B'},
    0x1D591: {c: 'l', f: 'FR-B'},
    0x1D592: {c: 'm', f: 'FR-B'},
    0x1D593: {c: 'n', f: 'FR-B'},
    0x1D594: {c: 'o', f: 'FR-B'},
    0x1D595: {c: 'p', f: 'FR-B'},
    0x1D596: {c: 'q', f: 'FR-B'},
    0x1D597: {c: 'r', f: 'FR-B'},
    0x1D598: {c: 's', f: 'FR-B'},
    0x1D599: {c: 't', f: 'FR-B'},
    0x1D59A: {c: 'u', f: 'FR-B'},
    0x1D59B: {c: 'v', f: 'FR-B'},
    0x1D59C: {c: 'w', f: 'FR-B'},
    0x1D59D: {c: 'x', f: 'FR-B'},
    0x1D59E: {c: 'y', f: 'FR-B'},
    0x1D59F: {c: 'z', f: 'FR-B'},
    0x1D5A0: {c: 'A', f: 'SS'},
    0x1D5A1: {c: 'B', f: 'SS'},
    0x1D5A2: {c: 'C', f: 'SS'},
    0x1D5A3: {c: 'D', f: 'SS'},
    0x1D5A4: {c: 'E', f: 'SS'},
    0x1D5A5: {c: 'F', f: 'SS'},
    0x1D5A6: {c: 'G', f: 'SS'},
    0x1D5A7: {c: 'H', f: 'SS'},
    0x1D5A8: {c: 'I', f: 'SS'},
    0x1D5A9: {c: 'J', f: 'SS'},
    0x1D5AA: {c: 'K', f: 'SS'},
    0x1D5AB: {c: 'L', f: 'SS'},
    0x1D5AC: {c: 'M', f: 'SS'},
    0x1D5AD: {c: 'N', f: 'SS'},
    0x1D5AE: {c: 'O', f: 'SS'},
    0x1D5AF: {c: 'P', f: 'SS'},
    0x1D5B0: {c: 'Q', f: 'SS'},
    0x1D5B1: {c: 'R', f: 'SS'},
    0x1D5B2: {c: 'S', f: 'SS'},
    0x1D5B3: {c: 'T', f: 'SS'},
    0x1D5B4: {c: 'U', f: 'SS'},
    0x1D5B5: {c: 'V', f: 'SS'},
    0x1D5B6: {c: 'W', f: 'SS'},
    0x1D5B7: {c: 'X', f: 'SS'},
    0x1D5B8: {c: 'Y', f: 'SS'},
    0x1D5B9: {c: 'Z', f: 'SS'},
    0x1D5BA: {c: 'a', f: 'SS'},
    0x1D5BB: {c: 'b', f: 'SS'},
    0x1D5BC: {c: 'c', f: 'SS'},
    0x1D5BD: {c: 'd', f: 'SS'},
    0x1D5BE: {c: 'e', f: 'SS'},
    0x1D5BF: {c: 'f', f: 'SS'},
    0x1D5C0: {c: 'g', f: 'SS'},
    0x1D5C1: {c: 'h', f: 'SS'},
    0x1D5C2: {c: 'i', f: 'SS'},
    0x1D5C3: {c: 'j', f: 'SS'},
    0x1D5C4: {c: 'k', f: 'SS'},
    0x1D5C5: {c: 'l', f: 'SS'},
    0x1D5C6: {c: 'm', f: 'SS'},
    0x1D5C7: {c: 'n', f: 'SS'},
    0x1D5C8: {c: 'o', f: 'SS'},
    0x1D5C9: {c: 'p', f: 'SS'},
    0x1D5CA: {c: 'q', f: 'SS'},
    0x1D5CB: {c: 'r', f: 'SS'},
    0x1D5CC: {c: 's', f: 'SS'},
    0x1D5CD: {c: 't', f: 'SS'},
    0x1D5CE: {c: 'u', f: 'SS'},
    0x1D5CF: {c: 'v', f: 'SS'},
    0x1D5D0: {c: 'w', f: 'SS'},
    0x1D5D1: {c: 'x', f: 'SS'},
    0x1D5D2: {c: 'y', f: 'SS'},
    0x1D5D3: {c: 'z', f: 'SS'},
    0x1D5D4: {c: 'A', f: 'SS-B'},
    0x1D5D5: {c: 'B', f: 'SS-B'},
    0x1D5D6: {c: 'C', f: 'SS-B'},
    0x1D5D7: {c: 'D', f: 'SS-B'},
    0x1D5D8: {c: 'E', f: 'SS-B'},
    0x1D5D9: {c: 'F', f: 'SS-B'},
    0x1D5DA: {c: 'G', f: 'SS-B'},
    0x1D5DB: {c: 'H', f: 'SS-B'},
    0x1D5DC: {c: 'I', f: 'SS-B'},
    0x1D5DD: {c: 'J', f: 'SS-B'},
    0x1D5DE: {c: 'K', f: 'SS-B'},
    0x1D5DF: {c: 'L', f: 'SS-B'},
    0x1D5E0: {c: 'M', f: 'SS-B'},
    0x1D5E1: {c: 'N', f: 'SS-B'},
    0x1D5E2: {c: 'O', f: 'SS-B'},
    0x1D5E3: {c: 'P', f: 'SS-B'},
    0x1D5E4: {c: 'Q', f: 'SS-B'},
    0x1D5E5: {c: 'R', f: 'SS-B'},
    0x1D5E6: {c: 'S', f: 'SS-B'},
    0x1D5E7: {c: 'T', f: 'SS-B'},
    0x1D5E8: {c: 'U', f: 'SS-B'},
    0x1D5E9: {c: 'V', f: 'SS-B'},
    0x1D5EA: {c: 'W', f: 'SS-B'},
    0x1D5EB: {c: 'X', f: 'SS-B'},
    0x1D5EC: {c: 'Y', f: 'SS-B'},
    0x1D5ED: {c: 'Z', f: 'SS-B'},
    0x1D5EE: {c: 'a', f: 'SS-B'},
    0x1D5EF: {c: 'b', f: 'SS-B'},
    0x1D5F0: {c: 'c', f: 'SS-B'},
    0x1D5F1: {c: 'd', f: 'SS-B'},
    0x1D5F2: {c: 'e', f: 'SS-B'},
    0x1D5F3: {c: 'f', f: 'SS-B'},
    0x1D5F4: {c: 'g', f: 'SS-B'},
    0x1D5F5: {c: 'h', f: 'SS-B'},
    0x1D5F6: {c: 'i', f: 'SS-B'},
    0x1D5F7: {c: 'j', f: 'SS-B'},
    0x1D5F8: {c: 'k', f: 'SS-B'},
    0x1D5F9: {c: 'l', f: 'SS-B'},
    0x1D5FA: {c: 'm', f: 'SS-B'},
    0x1D5FB: {c: 'n', f: 'SS-B'},
    0x1D5FC: {c: 'o', f: 'SS-B'},
    0x1D5FD: {c: 'p', f: 'SS-B'},
    0x1D5FE: {c: 'q', f: 'SS-B'},
    0x1D5FF: {c: 'r', f: 'SS-B'},
    0x1D600: {c: 's', f: 'SS-B'},
    0x1D601: {c: 't', f: 'SS-B'},
    0x1D602: {c: 'u', f: 'SS-B'},
    0x1D603: {c: 'v', f: 'SS-B'},
    0x1D604: {c: 'w', f: 'SS-B'},
    0x1D605: {c: 'x', f: 'SS-B'},
    0x1D606: {c: 'y', f: 'SS-B'},
    0x1D607: {c: 'z', f: 'SS-B'},
    0x1D608: {c: 'A', f: 'SS-I'},
    0x1D609: {c: 'B', f: 'SS-I'},
    0x1D60A: {c: 'C', f: 'SS-I'},
    0x1D60B: {c: 'D', f: 'SS-I'},
    0x1D60C: {c: 'E', f: 'SS-I'},
    0x1D60D: {c: 'F', f: 'SS-I'},
    0x1D60E: {c: 'G', f: 'SS-I'},
    0x1D60F: {c: 'H', f: 'SS-I'},
    0x1D610: {c: 'I', f: 'SS-I'},
    0x1D611: {c: 'J', f: 'SS-I'},
    0x1D612: {c: 'K', f: 'SS-I'},
    0x1D613: {c: 'L', f: 'SS-I'},
    0x1D614: {c: 'M', f: 'SS-I'},
    0x1D615: {c: 'N', f: 'SS-I'},
    0x1D616: {c: 'O', f: 'SS-I'},
    0x1D617: {c: 'P', f: 'SS-I'},
    0x1D618: {c: 'Q', f: 'SS-I'},
    0x1D619: {c: 'R', f: 'SS-I'},
    0x1D61A: {c: 'S', f: 'SS-I'},
    0x1D61B: {c: 'T', f: 'SS-I'},
    0x1D61C: {c: 'U', f: 'SS-I'},
    0x1D61D: {c: 'V', f: 'SS-I'},
    0x1D61E: {c: 'W', f: 'SS-I'},
    0x1D61F: {c: 'X', f: 'SS-I'},
    0x1D620: {c: 'Y', f: 'SS-I'},
    0x1D621: {c: 'Z', f: 'SS-I'},
    0x1D622: {c: 'a', f: 'SS-I'},
    0x1D623: {c: 'b', f: 'SS-I'},
    0x1D624: {c: 'c', f: 'SS-I'},
    0x1D625: {c: 'd', f: 'SS-I'},
    0x1D626: {c: 'e', f: 'SS-I'},
    0x1D627: {c: 'f', f: 'SS-I'},
    0x1D628: {c: 'g', f: 'SS-I'},
    0x1D629: {c: 'h', f: 'SS-I'},
    0x1D62A: {c: 'i', f: 'SS-I'},
    0x1D62B: {c: 'j', f: 'SS-I'},
    0x1D62C: {c: 'k', f: 'SS-I'},
    0x1D62D: {c: 'l', f: 'SS-I'},
    0x1D62E: {c: 'm', f: 'SS-I'},
    0x1D62F: {c: 'n', f: 'SS-I'},
    0x1D630: {c: 'o', f: 'SS-I'},
    0x1D631: {c: 'p', f: 'SS-I'},
    0x1D632: {c: 'q', f: 'SS-I'},
    0x1D633: {c: 'r', f: 'SS-I'},
    0x1D634: {c: 's', f: 'SS-I'},
    0x1D635: {c: 't', f: 'SS-I'},
    0x1D636: {c: 'u', f: 'SS-I'},
    0x1D637: {c: 'v', f: 'SS-I'},
    0x1D638: {c: 'w', f: 'SS-I'},
    0x1D639: {c: 'x', f: 'SS-I'},
    0x1D63A: {c: 'y', f: 'SS-I'},
    0x1D63B: {c: 'z', f: 'SS-I'},
    0x1D63C: {c: 'A', f: 'SS-I'},
    0x1D63D: {c: 'B', f: 'SS-I'},
    0x1D63E: {c: 'C', f: 'SS-I'},
    0x1D63F: {c: 'D', f: 'SS-I'},
    0x1D640: {c: 'E', f: 'SS-I'},
    0x1D641: {c: 'F', f: 'SS-I'},
    0x1D642: {c: 'G', f: 'SS-I'},
    0x1D643: {c: 'H', f: 'SS-I'},
    0x1D644: {c: 'I', f: 'SS-I'},
    0x1D645: {c: 'J', f: 'SS-I'},
    0x1D646: {c: 'K', f: 'SS-I'},
    0x1D647: {c: 'L', f: 'SS-I'},
    0x1D648: {c: 'M', f: 'SS-I'},
    0x1D649: {c: 'N', f: 'SS-I'},
    0x1D64A: {c: 'O', f: 'SS-I'},
    0x1D64B: {c: 'P', f: 'SS-I'},
    0x1D64C: {c: 'Q', f: 'SS-I'},
    0x1D64D: {c: 'R', f: 'SS-I'},
    0x1D64E: {c: 'S', f: 'SS-I'},
    0x1D64F: {c: 'T', f: 'SS-I'},
    0x1D650: {c: 'U', f: 'SS-I'},
    0x1D651: {c: 'V', f: 'SS-I'},
    0x1D652: {c: 'W', f: 'SS-I'},
    0x1D653: {c: 'X', f: 'SS-I'},
    0x1D654: {c: 'Y', f: 'SS-I'},
    0x1D655: {c: 'Z', f: 'SS-I'},
    0x1D656: {c: 'a', f: 'SS-I'},
    0x1D657: {c: 'b', f: 'SS-I'},
    0x1D658: {c: 'c', f: 'SS-I'},
    0x1D659: {c: 'd', f: 'SS-I'},
    0x1D65A: {c: 'e', f: 'SS-I'},
    0x1D65B: {c: 'f', f: 'SS-I'},
    0x1D65C: {c: 'g', f: 'SS-I'},
    0x1D65D: {c: 'h', f: 'SS-I'},
    0x1D65E: {c: 'i', f: 'SS-I'},
    0x1D65F: {c: 'j', f: 'SS-I'},
    0x1D660: {c: 'k', f: 'SS-I'},
    0x1D661: {c: 'l', f: 'SS-I'},
    0x1D662: {c: 'm', f: 'SS-I'},
    0x1D663: {c: 'n', f: 'SS-I'},
    0x1D664: {c: 'o', f: 'SS-I'},
    0x1D665: {c: 'p', f: 'SS-I'},
    0x1D666: {c: 'q', f: 'SS-I'},
    0x1D667: {c: 'r', f: 'SS-I'},
    0x1D668: {c: 's', f: 'SS-I'},
    0x1D669: {c: 't', f: 'SS-I'},
    0x1D66A: {c: 'u', f: 'SS-I'},
    0x1D66B: {c: 'v', f: 'SS-I'},
    0x1D66C: {c: 'w', f: 'SS-I'},
    0x1D66D: {c: 'x', f: 'SS-I'},
    0x1D66E: {c: 'y', f: 'SS-I'},
    0x1D66F: {c: 'z', f: 'SS-I'},
    0x1D670: {c: 'A', f: 'T'},
    0x1D671: {c: 'B', f: 'T'},
    0x1D672: {c: 'C', f: 'T'},
    0x1D673: {c: 'D', f: 'T'},
    0x1D674: {c: 'E', f: 'T'},
    0x1D675: {c: 'F', f: 'T'},
    0x1D676: {c: 'G', f: 'T'},
    0x1D677: {c: 'H', f: 'T'},
    0x1D678: {c: 'I', f: 'T'},
    0x1D679: {c: 'J', f: 'T'},
    0x1D67A: {c: 'K', f: 'T'},
    0x1D67B: {c: 'L', f: 'T'},
    0x1D67C: {c: 'M', f: 'T'},
    0x1D67D: {c: 'N', f: 'T'},
    0x1D67E: {c: 'O', f: 'T'},
    0x1D67F: {c: 'P', f: 'T'},
    0x1D680: {c: 'Q', f: 'T'},
    0x1D681: {c: 'R', f: 'T'},
    0x1D682: {c: 'S', f: 'T'},
    0x1D683: {c: 'T', f: 'T'},
    0x1D684: {c: 'U', f: 'T'},
    0x1D685: {c: 'V', f: 'T'},
    0x1D686: {c: 'W', f: 'T'},
    0x1D687: {c: 'X', f: 'T'},
    0x1D688: {c: 'Y', f: 'T'},
    0x1D689: {c: 'Z', f: 'T'},
    0x1D68A: {c: 'a', f: 'T'},
    0x1D68B: {c: 'b', f: 'T'},
    0x1D68C: {c: 'c', f: 'T'},
    0x1D68D: {c: 'd', f: 'T'},
    0x1D68E: {c: 'e', f: 'T'},
    0x1D68F: {c: 'f', f: 'T'},
    0x1D690: {c: 'g', f: 'T'},
    0x1D691: {c: 'h', f: 'T'},
    0x1D692: {c: 'i', f: 'T'},
    0x1D693: {c: 'j', f: 'T'},
    0x1D694: {c: 'k', f: 'T'},
    0x1D695: {c: 'l', f: 'T'},
    0x1D696: {c: 'm', f: 'T'},
    0x1D697: {c: 'n', f: 'T'},
    0x1D698: {c: 'o', f: 'T'},
    0x1D699: {c: 'p', f: 'T'},
    0x1D69A: {c: 'q', f: 'T'},
    0x1D69B: {c: 'r', f: 'T'},
    0x1D69C: {c: 's', f: 'T'},
    0x1D69D: {c: 't', f: 'T'},
    0x1D69E: {c: 'u', f: 'T'},
    0x1D69F: {c: 'v', f: 'T'},
    0x1D6A0: {c: 'w', f: 'T'},
    0x1D6A1: {c: 'x', f: 'T'},
    0x1D6A2: {c: 'y', f: 'T'},
    0x1D6A3: {c: 'z', f: 'T'},
    0x1D6A4: {c: '\\131', f: 'MI'},
    0x1D6A5: {c: '\\237', f: 'MI'},
    0x1D6A8: {c: 'A', f: 'B'},
    0x1D6A9: {c: 'B', f: 'B'},
    0x1D6AA: {c: '\\393', f: 'B'},
    0x1D6AB: {c: '\\394', f: 'B'},
    0x1D6AC: {c: 'E', f: 'B'},
    0x1D6AD: {c: 'Z', f: 'B'},
    0x1D6AE: {c: 'H', f: 'B'},
    0x1D6AF: {c: '\\398', f: 'B'},
    0x1D6B0: {c: 'I', f: 'B'},
    0x1D6B1: {c: 'K', f: 'B'},
    0x1D6B2: {c: '\\39B', f: 'B'},
    0x1D6B3: {c: 'M', f: 'B'},
    0x1D6B4: {c: 'N', f: 'B'},
    0x1D6B5: {c: '\\39E', f: 'B'},
    0x1D6B6: {c: 'O', f: 'B'},
    0x1D6B7: {c: '\\3A0', f: 'B'},
    0x1D6B8: {c: 'P', f: 'B'},
    0x1D6B9: {c: '\\398', f: 'B'},
    0x1D6BA: {c: '\\3A3', f: 'B'},
    0x1D6BB: {c: 'T', f: 'B'},
    0x1D6BC: {c: '\\3A5', f: 'B'},
    0x1D6BD: {c: '\\3A6', f: 'B'},
    0x1D6BE: {c: 'X', f: 'B'},
    0x1D6BF: {c: '\\3A8', f: 'B'},
    0x1D6C0: {c: '\\3A9', f: 'B'},
    0x1D6C1: {c: '\\2207', f: 'B'},
    0x1D6C2: {c: '\\3B1', f: 'BI'},
    0x1D6C3: {c: '\\3B2', f: 'BI'},
    0x1D6C4: {c: '\\3B3', f: 'BI'},
    0x1D6C5: {c: '\\3B4', f: 'BI'},
    0x1D6C6: {c: '\\3B5', f: 'BI'},
    0x1D6C7: {c: '\\3B6', f: 'BI'},
    0x1D6C8: {c: '\\3B7', f: 'BI'},
    0x1D6C9: {c: '\\3B8', f: 'BI'},
    0x1D6CA: {c: '\\3B9', f: 'BI'},
    0x1D6CB: {c: '\\3BA', f: 'BI'},
    0x1D6CC: {c: '\\3BB', f: 'BI'},
    0x1D6CD: {c: '\\3BC', f: 'BI'},
    0x1D6CE: {c: '\\3BD', f: 'BI'},
    0x1D6CF: {c: '\\3BE', f: 'BI'},
    0x1D6D0: {c: '\\3BF', f: 'BI'},
    0x1D6D1: {c: '\\3C0', f: 'BI'},
    0x1D6D2: {c: '\\3C1', f: 'BI'},
    0x1D6D3: {c: '\\3C2', f: 'BI'},
    0x1D6D4: {c: '\\3C3', f: 'BI'},
    0x1D6D5: {c: '\\3C4', f: 'BI'},
    0x1D6D6: {c: '\\3C5', f: 'BI'},
    0x1D6D7: {c: '\\3C6', f: 'BI'},
    0x1D6D8: {c: '\\3C7', f: 'BI'},
    0x1D6D9: {c: '\\3C8', f: 'BI'},
    0x1D6DA: {c: '\\3C9', f: 'BI'},
    0x1D6DB: {c: '\\2202', f: 'BI'},
    0x1D6DC: {c: '\\3F5', f: 'BI'},
    0x1D6DD: {c: '\\3D1', f: 'BI'},
    0x1D6DE: {c: '\\E009', f: 'A'},
    0x1D6DF: {c: '\\3D5', f: 'BI'},
    0x1D6E0: {c: '\\3F1', f: 'BI'},
    0x1D6E1: {c: '\\3D6', f: 'BI'},
    0x1D6E2: {c: 'A', f: 'I'},
    0x1D6E3: {c: 'B', f: 'I'},
    0x1D6E4: {c: '\\393', f: 'I'},
    0x1D6E5: {c: '\\394', f: 'I'},
    0x1D6E6: {c: 'E', f: 'I'},
    0x1D6E7: {c: 'Z', f: 'I'},
    0x1D6E8: {c: 'H', f: 'I'},
    0x1D6E9: {c: '\\398', f: 'I'},
    0x1D6EA: {c: 'I', f: 'I'},
    0x1D6EB: {c: 'K', f: 'I'},
    0x1D6EC: {c: '\\39B', f: 'I'},
    0x1D6ED: {c: 'M', f: 'I'},
    0x1D6EE: {c: 'N', f: 'I'},
    0x1D6EF: {c: '\\39E', f: 'I'},
    0x1D6F0: {c: 'O', f: 'I'},
    0x1D6F1: {c: '\\3A0', f: 'I'},
    0x1D6F2: {c: 'P', f: 'I'},
    0x1D6F3: {c: '\\398', f: 'I'},
    0x1D6F4: {c: '\\3A3', f: 'I'},
    0x1D6F5: {c: 'T', f: 'I'},
    0x1D6F6: {c: '\\3A5', f: 'I'},
    0x1D6F7: {c: '\\3A6', f: 'I'},
    0x1D6F8: {c: 'X', f: 'I'},
    0x1D6F9: {c: '\\3A8', f: 'I'},
    0x1D6FA: {c: '\\3A9', f: 'I'},
    0x1D6FB: {c: '\\2207', f: ''},
    0x1D6FC: {c: '\\3B1', f: 'I'},
    0x1D6FD: {c: '\\3B2', f: 'I'},
    0x1D6FE: {c: '\\3B3', f: 'I'},
    0x1D6FF: {c: '\\3B4', f: 'I'},
    0x1D700: {c: '\\3B5', f: 'I'},
    0x1D701: {c: '\\3B6', f: 'I'},
    0x1D702: {c: '\\3B7', f: 'I'},
    0x1D703: {c: '\\3B8', f: 'I'},
    0x1D704: {c: '\\3B9', f: 'I'},
    0x1D705: {c: '\\3BA', f: 'I'},
    0x1D706: {c: '\\3BB', f: 'I'},
    0x1D707: {c: '\\3BC', f: 'I'},
    0x1D708: {c: '\\3BD', f: 'I'},
    0x1D709: {c: '\\3BE', f: 'I'},
    0x1D70A: {c: '\\3BF', f: 'I'},
    0x1D70B: {c: '\\3C0', f: 'I'},
    0x1D70C: {c: '\\3C1', f: 'I'},
    0x1D70D: {c: '\\3C2', f: 'I'},
    0x1D70E: {c: '\\3C3', f: 'I'},
    0x1D70F: {c: '\\3C4', f: 'I'},
    0x1D710: {c: '\\3C5', f: 'I'},
    0x1D711: {c: '\\3C6', f: 'I'},
    0x1D712: {c: '\\3C7', f: 'I'},
    0x1D713: {c: '\\3C8', f: 'I'},
    0x1D714: {c: '\\3C9', f: 'I'},
    0x1D715: {c: '\\2202', f: ''},
    0x1D716: {c: '\\3F5', f: 'I'},
    0x1D717: {c: '\\3D1', f: 'I'},
    0x1D718: {c: '\\E009', f: 'A'},
    0x1D719: {c: '\\3D5', f: 'I'},
    0x1D71A: {c: '\\3F1', f: 'I'},
    0x1D71B: {c: '\\3D6', f: 'I'},
    0x1D71C: {c: 'A', f: 'BI'},
    0x1D71D: {c: 'B', f: 'BI'},
    0x1D71E: {c: '\\393', f: 'BI'},
    0x1D71F: {c: '\\394', f: 'BI'},
    0x1D720: {c: 'E', f: 'BI'},
    0x1D721: {c: 'Z', f: 'BI'},
    0x1D722: {c: 'H', f: 'BI'},
    0x1D723: {c: '\\398', f: 'BI'},
    0x1D724: {c: 'I', f: 'BI'},
    0x1D725: {c: 'K', f: 'BI'},
    0x1D726: {c: '\\39B', f: 'BI'},
    0x1D727: {c: 'M', f: 'BI'},
    0x1D728: {c: 'N', f: 'BI'},
    0x1D729: {c: '\\39E', f: 'BI'},
    0x1D72A: {c: 'O', f: 'BI'},
    0x1D72B: {c: '\\3A0', f: 'BI'},
    0x1D72C: {c: 'P', f: 'BI'},
    0x1D72D: {c: '\\398', f: 'BI'},
    0x1D72E: {c: '\\3A3', f: 'BI'},
    0x1D72F: {c: 'T', f: 'BI'},
    0x1D730: {c: '\\3A5', f: 'BI'},
    0x1D731: {c: '\\3A6', f: 'BI'},
    0x1D732: {c: 'X', f: 'BI'},
    0x1D733: {c: '\\3A8', f: 'BI'},
    0x1D734: {c: '\\3A9', f: 'BI'},
    0x1D735: {c: '\\2207', f: ''},
    0x1D736: {c: '\\3B1', f: 'BI'},
    0x1D737: {c: '\\3B2', f: 'BI'},
    0x1D738: {c: '\\3B3', f: 'BI'},
    0x1D739: {c: '\\3B4', f: 'BI'},
    0x1D73A: {c: '\\3B5', f: 'BI'},
    0x1D73B: {c: '\\3B6', f: 'BI'},
    0x1D73C: {c: '\\3B7', f: 'BI'},
    0x1D73D: {c: '\\3B8', f: 'BI'},
    0x1D73E: {c: '\\3B9', f: 'BI'},
    0x1D73F: {c: '\\3BA', f: 'BI'},
    0x1D740: {c: '\\3BB', f: 'BI'},
    0x1D741: {c: '\\3BC', f: 'BI'},
    0x1D742: {c: '\\3BD', f: 'BI'},
    0x1D743: {c: '\\3BE', f: 'BI'},
    0x1D744: {c: '\\3BF', f: 'BI'},
    0x1D745: {c: '\\3C0', f: 'BI'},
    0x1D746: {c: '\\3C1', f: 'BI'},
    0x1D747: {c: '\\3C2', f: 'BI'},
    0x1D748: {c: '\\3C3', f: 'BI'},
    0x1D749: {c: '\\3C4', f: 'BI'},
    0x1D74A: {c: '\\3C5', f: 'BI'},
    0x1D74B: {c: '\\3C6', f: 'BI'},
    0x1D74C: {c: '\\3C7', f: 'BI'},
    0x1D74D: {c: '\\3C8', f: 'BI'},
    0x1D74E: {c: '\\3C9', f: 'BI'},
    0x1D74F: {c: '\\2202', f: ''},
    0x1D750: {c: '\\3F5', f: 'BI'},
    0x1D751: {c: '\\3D1', f: 'BI'},
    0x1D752: {c: '\\E009', f: 'A'},
    0x1D753: {c: '\\3D5', f: 'BI'},
    0x1D754: {c: '\\3F1', f: 'BI'},
    0x1D755: {c: '\\3D6', f: 'BI'},
    0x1D756: {c: 'A', f: 'SS-B'},
    0x1D757: {c: 'B', f: 'SS-B'},
    0x1D758: {c: '\\393', f: 'SS-B'},
    0x1D759: {c: '\\394', f: 'SS-B'},
    0x1D75A: {c: 'E', f: 'SS-B'},
    0x1D75B: {c: 'Z', f: 'SS-B'},
    0x1D75C: {c: 'H', f: 'SS-B'},
    0x1D75D: {c: '\\398', f: 'SS-B'},
    0x1D75E: {c: 'I', f: 'SS-B'},
    0x1D75F: {c: 'K', f: 'SS-B'},
    0x1D760: {c: '\\39B', f: 'SS-B'},
    0x1D761: {c: 'M', f: 'SS-B'},
    0x1D762: {c: 'N', f: 'SS-B'},
    0x1D763: {c: '\\39E', f: 'SS-B'},
    0x1D764: {c: 'O', f: 'SS-B'},
    0x1D765: {c: '\\3A0', f: 'SS-B'},
    0x1D766: {c: 'P', f: 'SS-B'},
    0x1D767: {c: '\\398', f: 'SS-B'},
    0x1D768: {c: '\\3A3', f: 'SS-B'},
    0x1D769: {c: 'T', f: 'SS-B'},
    0x1D76A: {c: '\\3A5', f: 'SS-B'},
    0x1D76B: {c: '\\3A6', f: 'SS-B'},
    0x1D76C: {c: 'X', f: 'SS-B'},
    0x1D76D: {c: '\\3A8', f: 'SS-B'},
    0x1D76E: {c: '\\3A9', f: 'SS-B'},
    0x1D76F: {c: '\\2207', f: ''},
    0x1D770: {c: '\\3B1', f: 'BI'},
    0x1D771: {c: '\\3B2', f: 'BI'},
    0x1D772: {c: '\\3B3', f: 'BI'},
    0x1D773: {c: '\\3B4', f: 'BI'},
    0x1D774: {c: '\\3B5', f: 'BI'},
    0x1D775: {c: '\\3B6', f: 'BI'},
    0x1D776: {c: '\\3B7', f: 'BI'},
    0x1D777: {c: '\\3B8', f: 'BI'},
    0x1D778: {c: '\\3B9', f: 'BI'},
    0x1D779: {c: '\\3BA', f: 'BI'},
    0x1D77A: {c: '\\3BB', f: 'BI'},
    0x1D77B: {c: '\\3BC', f: 'BI'},
    0x1D77C: {c: '\\3BD', f: 'BI'},
    0x1D77D: {c: '\\3BE', f: 'BI'},
    0x1D77E: {c: '\\3BF', f: 'BI'},
    0x1D77F: {c: '\\3C0', f: 'BI'},
    0x1D780: {c: '\\3C1', f: 'BI'},
    0x1D781: {c: '\\3C2', f: 'BI'},
    0x1D782: {c: '\\3C3', f: 'BI'},
    0x1D783: {c: '\\3C4', f: 'BI'},
    0x1D784: {c: '\\3C5', f: 'BI'},
    0x1D785: {c: '\\3C6', f: 'BI'},
    0x1D786: {c: '\\3C7', f: 'BI'},
    0x1D787: {c: '\\3C8', f: 'BI'},
    0x1D788: {c: '\\3C9', f: 'BI'},
    0x1D789: {c: '\\2202', f: ''},
    0x1D78A: {c: '\\3F5', f: 'BI'},
    0x1D78B: {c: '\\3D1', f: 'BI'},
    0x1D78C: {c: '\\E009', f: 'A'},
    0x1D78D: {c: '\\3D5', f: 'BI'},
    0x1D78E: {c: '\\3F1', f: 'BI'},
    0x1D78F: {c: '\\3D6', f: 'BI'},
    0x1D790: {c: 'A', f: 'SS-I'},
    0x1D791: {c: 'B', f: 'SS-I'},
    0x1D792: {c: '\\393', f: 'SS-I'},
    0x1D793: {c: '\\394', f: 'SS-I'},
    0x1D794: {c: 'E', f: 'SS-I'},
    0x1D795: {c: 'Z', f: 'SS-I'},
    0x1D796: {c: 'H', f: 'SS-I'},
    0x1D797: {c: '\\398', f: 'SS-I'},
    0x1D798: {c: 'I', f: 'SS-I'},
    0x1D799: {c: 'K', f: 'SS-I'},
    0x1D79A: {c: '\\39B', f: 'SS-I'},
    0x1D79B: {c: 'M', f: 'SS-I'},
    0x1D79C: {c: 'N', f: 'SS-I'},
    0x1D79D: {c: '\\39E', f: 'SS-I'},
    0x1D79E: {c: 'O', f: 'SS-I'},
    0x1D79F: {c: '\\3A0', f: 'SS-I'},
    0x1D7A0: {c: 'P', f: 'SS-I'},
    0x1D7A1: {c: '\\398', f: 'SS-I'},
    0x1D7A2: {c: '\\3A3', f: 'SS-I'},
    0x1D7A3: {c: 'T', f: 'SS-I'},
    0x1D7A4: {c: '\\3A5', f: 'SS-I'},
    0x1D7A5: {c: '\\3A6', f: 'SS-I'},
    0x1D7A6: {c: 'X', f: 'SS-I'},
    0x1D7A7: {c: '\\3A8', f: 'SS-I'},
    0x1D7A8: {c: '\\3A9', f: 'SS-I'},
    0x1D7A9: {c: '\\2207', f: ''},
    0x1D7AA: {c: '\\3B1', f: 'BI'},
    0x1D7AB: {c: '\\3B2', f: 'BI'},
    0x1D7AC: {c: '\\3B3', f: 'BI'},
    0x1D7AD: {c: '\\3B4', f: 'BI'},
    0x1D7AE: {c: '\\3B5', f: 'BI'},
    0x1D7AF: {c: '\\3B6', f: 'BI'},
    0x1D7B0: {c: '\\3B7', f: 'BI'},
    0x1D7B1: {c: '\\3B8', f: 'BI'},
    0x1D7B2: {c: '\\3B9', f: 'BI'},
    0x1D7B3: {c: '\\3BA', f: 'BI'},
    0x1D7B4: {c: '\\3BB', f: 'BI'},
    0x1D7B5: {c: '\\3BC', f: 'BI'},
    0x1D7B6: {c: '\\3BD', f: 'BI'},
    0x1D7B7: {c: '\\3BE', f: 'BI'},
    0x1D7B8: {c: '\\3BF', f: 'BI'},
    0x1D7B9: {c: '\\3C0', f: 'BI'},
    0x1D7BA: {c: '\\3C1', f: 'BI'},
    0x1D7BB: {c: '\\3C2', f: 'BI'},
    0x1D7BC: {c: '\\3C3', f: 'BI'},
    0x1D7BD: {c: '\\3C4', f: 'BI'},
    0x1D7BE: {c: '\\3C5', f: 'BI'},
    0x1D7BF: {c: '\\3C6', f: 'BI'},
    0x1D7C0: {c: '\\3C7', f: 'BI'},
    0x1D7C1: {c: '\\3C8', f: 'BI'},
    0x1D7C2: {c: '\\3C9', f: 'BI'},
    0x1D7C3: {c: '\\2202', f: ''},
    0x1D7C4: {c: '\\3F5', f: 'BI'},
    0x1D7C5: {c: '\\3D1', f: 'BI'},
    0x1D7C6: {c: '\\E009', f: 'A'},
    0x1D7C7: {c: '\\3D5', f: 'BI'},
    0x1D7C8: {c: '\\3F1', f: 'BI'},
    0x1D7C9: {c: '\\3D6', f: 'BI'},
    0x1D7CA: {c: 'F', f: 'I'},
    0x1D7CB: {c: '\\3DD', f: 'A'},
    0x1D7CE: {c: '0', f: 'B'},
    0x1D7CF: {c: '1', f: 'B'},
    0x1D7D0: {c: '2', f: 'B'},
    0x1D7D1: {c: '3', f: 'B'},
    0x1D7D2: {c: '4', f: 'B'},
    0x1D7D3: {c: '5', f: 'B'},
    0x1D7D4: {c: '6', f: 'B'},
    0x1D7D5: {c: '7', f: 'B'},
    0x1D7D6: {c: '8', f: 'B'},
    0x1D7D7: {c: '9', f: 'B'},
    0x1D7D8: {c: '0', f: 'B'},
    0x1D7D9: {c: '1', f: 'B'},
    0x1D7DA: {c: '2', f: 'B'},
    0x1D7DB: {c: '3', f: 'B'},
    0x1D7DC: {c: '4', f: 'B'},
    0x1D7DD: {c: '5', f: 'B'},
    0x1D7DE: {c: '6', f: 'B'},
    0x1D7DF: {c: '7', f: 'B'},
    0x1D7E0: {c: '8', f: 'B'},
    0x1D7E1: {c: '9', f: 'B'},
    0x1D7E2: {c: '0', f: 'SS'},
    0x1D7E3: {c: '1', f: 'SS'},
    0x1D7E4: {c: '2', f: 'SS'},
    0x1D7E5: {c: '3', f: 'SS'},
    0x1D7E6: {c: '4', f: 'SS'},
    0x1D7E7: {c: '5', f: 'SS'},
    0x1D7E8: {c: '6', f: 'SS'},
    0x1D7E9: {c: '7', f: 'SS'},
    0x1D7EA: {c: '8', f: 'SS'},
    0x1D7EB: {c: '9', f: 'SS'},
    0x1D7EC: {c: '0', f: 'SS-B'},
    0x1D7ED: {c: '1', f: 'SS-B'},
    0x1D7EE: {c: '2', f: 'SS-B'},
    0x1D7EF: {c: '3', f: 'SS-B'},
    0x1D7F0: {c: '4', f: 'SS-B'},
    0x1D7F1: {c: '5', f: 'SS-B'},
    0x1D7F2: {c: '6', f: 'SS-B'},
    0x1D7F3: {c: '7', f: 'SS-B'},
    0x1D7F4: {c: '8', f: 'SS-B'},
    0x1D7F5: {c: '9', f: 'SS-B'},
    0x1D7F6: {c: '0', f: 'T'},
    0x1D7F7: {c: '1', f: 'T'},
    0x1D7F8: {c: '2', f: 'T'},
    0x1D7F9: {c: '3', f: 'T'},
    0x1D7FA: {c: '4', f: 'T'},
    0x1D7FB: {c: '5', f: 'T'},
    0x1D7FC: {c: '6', f: 'T'},
    0x1D7FD: {c: '7', f: 'T'},
    0x1D7FE: {c: '8', f: 'T'},
    0x1D7FF: {c: '9', f: 'T'},
});
