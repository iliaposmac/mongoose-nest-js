export class CreateOrderDto {
    readonly id?: string;
    readonly title: string;
    readonly price: number;
    readonly userId?: string;
}