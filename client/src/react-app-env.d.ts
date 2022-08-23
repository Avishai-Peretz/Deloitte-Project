/// <reference types="react-scripts" />


declare namespace NodeJS{
    interface Process {
        readonly browser: boolean;
    }
    interface ProcessENV {
        readonly NODE_ENV: 'development' | 'production' | 'test';   
    }
}

declare module '*.module.css' { 
    const classes: { readonly [key: string]: string }
    export default classes;
}
declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes;
}
declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes;
}