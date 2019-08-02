/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
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

/**
 * @fileoverview  Implements the CHTMLmtext wrapper for the MmlMtext object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {CHTMLWrapper, CHTMLConstructor} from '../Wrapper.js';
import {CommonMtext, CommonMtextMixin} from '../../common/Wrappers/mtext.js';
import {MmlMtext} from '../../../core/MmlTree/MmlNodes/mtext.js';

/*****************************************************************/
/**
 * The CHTMLmtext wrapper for the MmlMtext object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export class CHTMLmtext<N, T, D> extends CommonMtextMixin<CHTMLConstructor<N, T, D>>(CHTMLWrapper) {

    public static kind = MmlMtext.prototype.kind;

}
