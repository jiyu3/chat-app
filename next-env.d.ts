/// <reference types="next" />
/// <reference types="next/types/global" />
import 'react'
declare module "react" {
    interface HTMLProps<T> {
        jsx?: boolean;
        global?: boolean;
    }
}
