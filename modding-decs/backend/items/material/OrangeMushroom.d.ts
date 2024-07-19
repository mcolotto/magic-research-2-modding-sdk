import { GameState } from "../../GameState";
import { Item, ItemParams } from "../Item";
import { ItemTagEnum } from "../ItemTagEnum";
declare class OrangeMushroom extends Item {
    getId(): string;
    getTags(): ItemTagEnum[];
    getPicture(): any;
    getBaseName(params: ItemParams): string;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    getEffect(state: GameState, params: ItemParams): string | undefined;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
}
declare const _default: OrangeMushroom;
export default _default;
