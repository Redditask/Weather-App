declare module "*.module.scss";

declare module "react-transition-group";

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            [key: string]: string | undefined;
        }
    }
}
