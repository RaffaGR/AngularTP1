import { Injectable, Service } from '@angular/core';


// @Injectable({
//     providedIn: 'root',
// }) // prof disse q vamos injetar do msm jeito entao n faz diferença
@Service()
export class LoggerService {
    info(msg: string, extra?: unknown) {
        console.info(msg, extra ?? '');
    }

    warn(msg: string, extra?: unknown) {
        console.warn(msg, extra ?? '');
    }

    error(msg: string, extra?: unknown) {
        console.error(msg, extra ?? '');
    }
}
