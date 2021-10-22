import React from 'react';
import {MdRemoveCircleOutline,MdAddCircleOutline,MdDelete} from 'react-icons/md';

 import { Carrinho,ProductTable,Total } from './styles';

function cart() {
  return (

    <Carrinho>
        <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-sc-feminino/26/HZM-5147-026/HZM-5147-026_zoom2.jpg?ts=1630603638&ims=326x" alt="Tenis" />
                    </td>

                    <td>
                        <strong>Tenis Muito Bom</strong>
                        <strong>22000 kz</strong>

                    </td>
                    <td>
                        <div>
                        <button type="button">
                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>

                        <input type="number" readOnly value={1}/>

                        <button type="button">
                            <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                        </div>

                    </td>

                    <td>
                        <strong>44000 kz</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#7159c1"/>
                        </button>
                    </td>
                </tr>
            </tbody>

        </ProductTable>

        <footer>
            <button type="button">Finalizar Pedido</button>

            <Total>
                <span>TOTAL</span>
                <strong>220000 kz</strong>

            </Total>
        </footer>

    </Carrinho>
  );
}

export default cart;
