import BaseApi from "../Core/BaseApi/BaseApi";
import { Product } from "../Entity/Product";

export default class ProductDataService extends BaseApi {
  static readonly productUrlGetAll = "products";
  static readonly productGet = "";

  public static async GetAll() {
    return this.BaseGetRequestAsync<Product[]>(this.productUrlGetAll);
  }
  public static async Get(productData: ProductDataRequestModel) {
    return this.BasePostRequestAsync<Product[]>(this.productGet, productData);
  }
}
export interface ProductDataRequestModel {
  productId: string;
}
