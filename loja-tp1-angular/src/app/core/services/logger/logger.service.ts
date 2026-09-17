import { /*Injectable,*/Service } from '@angular/core';


// @Injectable({
//     providedIn: 'root',
// }) // prof disse q vamos injetar do msm jeito entao n faz diferença
export interface LogEntry {
    nivel: 'info' | 'warn' | 'error';
    msg: string;
    extra?: unknown;
    data: string;
}

@Service()
export class LoggerService {
    private lojaLogs = 'lojaLogs';
    info(msg: string, extra?: unknown) {
        this.gravar('info', msg, extra);

        console.info(msg, extra ?? '');
    }

    warn(msg: string, extra?: unknown) {
        this.gravar('warn', msg, extra);

        console.warn(msg, extra ?? '');
    }

    error(msg: string, extra?: unknown) {
        this.gravar('error', msg, extra);
        
        console.error(msg, extra ?? '');
    }

    lerLogs(): LogEntry[] {
        
        const texto = localStorage.getItem(this.lojaLogs);
        if (!texto) {
            return [];
        }
        return JSON.parse(texto) as LogEntry[];
    }

    private gravar(nivel: 'info' | 'warn' | 'error', msg: string, extra?: unknown) {
        const logs = this.lerLogs();

        logs.push({
            nivel: nivel,
            msg: msg,
            extra: extra,
            data: new Date().toISOString()
        });

        localStorage.setItem(this.lojaLogs, JSON.stringify(logs));
    }
}
