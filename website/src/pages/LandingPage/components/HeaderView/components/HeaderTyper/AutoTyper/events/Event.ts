import { AutoTyper } from '../index';
import {LogCodeManager} from "@agile-ts/core";
// import { LogCodeManager } from '@agile-ts/core';

export class Event {
    public eventType: string;
    public autoTyper: () => AutoTyper;
    public isTypeEvent: boolean;

    constructor(autoTyper: AutoTyper, isTypeEvent: boolean, eventType?: string) {
        this.autoTyper = () => autoTyper;
        this.isTypeEvent = isTypeEvent;
        this.eventType = eventType || 'unknown';
    }

    public async execute(): Promise<void> {
        console.log('Executing empty function!')
        //LogCodeManager.getLogger()?.warn('Executing empty function!');
    }
}
