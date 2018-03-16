// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * 这个文件夹中包括为各个目标环境准备的文件，
 * 它们导出了一些应用中要用到的配置变量。 
 * 这些文件会在构建应用时被替换。 
 * 比如你可能在产品环境中使用不同的API端点地址，或使用不同的统计Token参数。 
 * 甚至使用一些模拟服务。 所有这些，CLI都替你考虑到了。
 */
export const environment = {
  production: false
};