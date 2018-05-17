// flow-typed signature: 6cdfff6fe7ed58305bf9148269d1186d
// flow-typed version: <<STUB>>/babel-generator_v^6.8.0/flow_v0.38.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'babel-generator'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

import { BabelNode } from "babel-types";

type SourceMap = {
  sources: Array<string>,
  names: Array<string>,
  mappings: string,
  sourcesContent: Array<string>
};

declare module 'babel-generator' {
  declare module.exports: (ast: BabelNode, opts: Object, code: string) => { code: string, map?: SourceMap };
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'babel-generator/lib/buffer' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/base' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/classes' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/expressions' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/flow' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/jsx' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/methods' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/modules' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/statements' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/template-literals' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/generators/types' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/index' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/node/index' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/node/parentheses' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/node/whitespace' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/printer' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/source-map' {
  declare module.exports: any;
}

declare module 'babel-generator/lib/whitespace' {
  declare module.exports: any;
}

// Filename aliases
declare module 'babel-generator/lib/buffer.js' {
  declare module.exports: $Exports<'babel-generator/lib/buffer'>;
}
declare module 'babel-generator/lib/generators/base.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/base'>;
}
declare module 'babel-generator/lib/generators/classes.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/classes'>;
}
declare module 'babel-generator/lib/generators/expressions.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/expressions'>;
}
declare module 'babel-generator/lib/generators/flow.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/flow'>;
}
declare module 'babel-generator/lib/generators/jsx.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/jsx'>;
}
declare module 'babel-generator/lib/generators/methods.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/methods'>;
}
declare module 'babel-generator/lib/generators/modules.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/modules'>;
}
declare module 'babel-generator/lib/generators/statements.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/statements'>;
}
declare module 'babel-generator/lib/generators/template-literals.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/template-literals'>;
}
declare module 'babel-generator/lib/generators/types.js' {
  declare module.exports: $Exports<'babel-generator/lib/generators/types'>;
}
declare module 'babel-generator/lib/index.js' {
  declare module.exports: $Exports<'babel-generator/lib/index'>;
}
declare module 'babel-generator/lib/node/index.js' {
  declare module.exports: $Exports<'babel-generator/lib/node/index'>;
}
declare module 'babel-generator/lib/node/parentheses.js' {
  declare module.exports: $Exports<'babel-generator/lib/node/parentheses'>;
}
declare module 'babel-generator/lib/node/whitespace.js' {
  declare module.exports: $Exports<'babel-generator/lib/node/whitespace'>;
}
declare module 'babel-generator/lib/printer.js' {
  declare module.exports: $Exports<'babel-generator/lib/printer'>;
}
declare module 'babel-generator/lib/source-map.js' {
  declare module.exports: $Exports<'babel-generator/lib/source-map'>;
}
declare module 'babel-generator/lib/whitespace.js' {
  declare module.exports: $Exports<'babel-generator/lib/whitespace'>;
}
