declare namespace VPAIDHTML5Client {
    class VPAIDCreative {

    }
    type TCallback = (error: any, result: any) => void;
    interface IAdUnitCreativeData {
        readonly AdParameters?: string;
    }
    interface IAdUnitEnvironmentVars {
        readonly slot?: HTMLElement;
        readonly videoSlot?: HTMLVideoElement;
        readonly videoSlotCanAutoPlay?: boolean;
    }
    class VPAIDAdUnit {
        constructor(creative: VPAIDCreative, el?: HTMLElement, video?: HTMLVideoElement)
        initAd(
            width: number,
            height: number,
            viewMode: string,
            desiredBitrate: number,
            creativeData?: IAdUnitCreativeData,
            environmentVars?: IAdUnitEnvironmentVars,
        ): void;
        handshakeVersion(
            playerVPAIDVersion: string,
            callback: (error: string, version: string) => void,
        ): string;
        resizeAd(
            width: number,
            height: number,
            viewMode: string,
        ): void;
        startAd(): void;
        stopAd(): void;
        pauseAd(): void;
        resumeAd(): void;
        expandAd(): void;
        collapseAd(): void;
        skipAd(): void;
        on(
            eventName: string,
            callback: () => void,
        ): void;
        subscribe(
            eventName: string,
            callback: () => void,
        ): void;
        off(eventName: string): void;
        unsubscribe(eventName: string): void;
        getAdVolume(callback: (error: string, volume: number) => void): void;
        setAdVolume(volume: number): void;
        getAdSkippableState(callback: (error: string, isSkippable: boolean) => void): void;
        getAdRemainingTime(callback: (error: string, remainingTime: number) => void): void;
        getAdDuration(callback: (error: string, duration: number) => void): void;
    }
    
    class VPAIDHTML5Client {
        /**
         * @param el that will contain the iframe to load adUnit and a el to add to adUnit slot
         * @param video default video element to be used by adUnit
         * @param templateConfig template: html template to be used instead of the default, extraOptions: to be used when rendering the template
         * @param vpaidOptions timeout: when loading adUnit
         */
        constructor(el: HTMLElement, video: HTMLVideoElement, templateConfig?: string, vpaidOptions?: {timeout: number});
        /**
         * @param adURL url of the js of the adUnit
         * @param callback
         */
        loadAdUnit(adURL: string, callback: (error: any, adUnit: VPAIDAdUnit) => void): void
        unloadAdUnit(): void
    }
}

declare module "@shackijj/vpaid-html5-client" {
    export = VPAIDHTML5Client.VPAIDHTML5Client;
}