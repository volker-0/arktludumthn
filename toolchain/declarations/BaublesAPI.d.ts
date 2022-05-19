/// <reference path="core-engine.d.ts" />
declare const LOG_TAG = "BAUBLES-API";
declare let GUI: UI.StandartWindow;
declare let BUTTON_GUI: UI.Window;
interface BaubleDescription {
    /**
     * Item id
     */
    id: number;
    /**
     * Type of bauble. Tells which slot the item can be put in
     */
    type: BaubleType;
    /**
     * Called when equipping the item and upon entering the world if the item is equipped
     */
    onEquip?: (client: NetworkClient, container: ItemContainer, slotName: string) => void;
    /**
     * Called when a player take off the item or dies
     */
    onTakeOff?: (client: NetworkClient, container: ItemContainer, slotName: string) => void;
    /**
     * Called every tick if the the item is equipped
     */
    tick: (client: NetworkClient, container: ItemContainer, slotName: string) => void;
}
declare enum BaubleType {
    amulet = "amulet",
    ring = "ring",
    belt = "belt",
    head = "head",
    body = "body",
    charm = "charm"
}
interface BaublesData {
    [id: number]: {
        container: ItemContainer;
        cache: any;
    };
}
declare class Baubles {
    static btnContainer: UI.Container;
    static descriptions: {
        [id: number]: BaubleDescription;
    };
    static data: BaublesData;
    static registerBauble(obj: BaubleDescription): void;
    static setupClientSide(): void;
    static setupServerSide(): void;
    static setupContainer(playerUid: number, container?: ItemContainer): ItemContainer;
    static getContainer(client: NetworkClient): ItemContainer;
    static tick(): void;
    static openGui(): void;
    static openGuiFor(client: NetworkClient): void;
    static getDesc(id: number): BaubleDescription;
    static getType(id: number): BaubleType;
    static reset(): void;
    static getDataFor(playerUid: number): {
        container: ItemContainer;
        cache: any;
    };
}
interface BaublesSaverScope {
    data: BaublesData;
    _format: number;
}
