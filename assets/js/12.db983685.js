(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(t,s,n){t.exports=n.p+"assets/img/regex1.cfda03f8.png"},212:function(t,s,n){t.exports=n.p+"assets/img/regex2.a0035988.png"},230:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Files are downloaded from the FTP server to a LOCAL/IN directory on a daily basis. This component has the responsibility of scanning the Inbound file directory for files to process. It picks up files matching the prescribed naming pattern, and decides which to include or exclude from further processing.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("The files are named according to a naming convention which includes the following attributes:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("A regular expression is used to filter the list of files. Regex named groups are the key to converting the file name string into a strongly type object:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("A list comprehension iterates the files in list for files obtained with the glob.glob library function.\nThe projection (product) of the list comprehension is a  CsvFileName object, where the constructor is passed the values of the regex named groups. A filter condition limits the output to only where there is a group match in the file name.")]),t._v(" "),t._m(7),a("p",[t._v("The following screenshots show the regular expression tested in regex101.com")]),t._v(" "),a("figure",[a("img",{directives:[{name:"img",rawName:"v-img"}],attrs:{src:n(211),alt:"regex1"}}),t._v(" "),t._m(8)]),t._v(" "),a("figure",[a("img",{directives:[{name:"img",rawName:"v-img"}],attrs:{src:n(212),alt:"regex2"}}),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("As there is a bit of repetition in the various exclude checking functions, a lambda expression is used to define the predicate for each case, and is passed in to a common function. The lambda expression captures class attribute values which are in it’s enclosing scope, such as self.vpd.")]),t._v(" "),a("MiniMap")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"file-handling-with-regex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-handling-with-regex","aria-hidden":"true"}},[this._v("#")]),this._v(" File Handling with Regex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"file-naming-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-naming-protocol","aria-hidden":"true"}},[this._v("#")]),this._v(" File Naming Protocol")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("Organisation identifying number (VPD)")])]),t._v(" "),n("li",[n("p",[t._v("File type indicator - full snapshot or delta changes")])]),t._v(" "),n("li",[n("p",[t._v("Date of file generation")])]),t._v(" "),n("li",[n("p",[t._v("Sequence number of file")])]),t._v(" "),n("li",[n("p",[t._v("Files in process of being written have an additional suffix")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"regex-filename-parsing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regex-filename-parsing","aria-hidden":"true"}},[this._v("#")]),this._v(" Regex Filename Parsing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-regex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"(XX_(?P<vpd>[0-9]{3})_YYY_(?P<type>FT[F,C,R])_(?P<date>[0-9]{8})_(?P<seqno>[0-9]{8}).DAT(_prog)?)$"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"list-comprehension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-comprehension","aria-hidden":"true"}},[this._v("#")]),this._v(" List Comprehension")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_files_in_directory")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    filename_regex "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"(XX_(?P<vpd>[0-9]{3})_YYY_(?P<type>FT[F,C,R])_(?P<date>[0-9]{8})_(?P<seqno>[0-9]{8}).DAT(_prog)?)$"')]),t._v("\n    regex "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("compile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("esr_filename_regex"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" glob"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("glob"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/*"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CsvFileName"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vpd'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'date'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'seqno'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("list")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" g "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("regex"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" g"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figcaption",[s("i",[this._v("(click to enlarge)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figcaption",[s("i",[this._v("(click to enlarge)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"includes-and-excludes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#includes-and-excludes","aria-hidden":"true"}},[this._v("#")]),this._v(" Includes and Excludes")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("The files found with Regex are further filtered into Include and Exclude lists if")])]),t._v(" "),n("li",[n("p",[t._v("They have the the wrong VPD number")])]),t._v(" "),n("li",[n("p",[t._v("They have the in-progress suffix")])]),t._v(" "),n("li",[n("p",[t._v("They have a sequence number preceding the last processed")])]),t._v(" "),n("li",[n("p",[t._v("Any delta file which precedes a full snapshot file is irrelevant")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_excludes_for_wrong_vpd")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get_excludes"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vpd "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vpd"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Incorrect VPD code"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_excludes_for_in_transfer_process")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get_excludes"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endswith"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"_txfr"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"In process of transferring"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_excludes_for_precedes_last_sequence")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get_excludes"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sequence_number "),n("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_sequence_number_processed"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       "),n("span",{attrs:{class:"token string"}},[t._v('"Precedes sequence number from last run"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_excludes_for_changes_preceding_full_file")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_full_file"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get_excludes"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sequence_number "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("full_file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sequence_number"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       "),n("span",{attrs:{class:"token string"}},[t._v('"Precedes sequence number of full file"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_get_excludes")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    excludes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_excluded_reason"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files_included\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_adjust_include_exclude_lists"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("excludes"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@"),n("span",{attrs:{class:"token builtin"}},[t._v("staticmethod")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_set_excluded_reason")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("excluded_file"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    excluded_file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason_excluded "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reason\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" excluded_file\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"lambda-expressions-for-exclude-evaluation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lambda-expressions-for-exclude-evaluation","aria-hidden":"true"}},[this._v("#")]),this._v(" Lambda Expressions for Exclude Evaluation")])}],!1,null,null,null);e.options.__file="file-handling-with-regex.md";s.default=e.exports}}]);