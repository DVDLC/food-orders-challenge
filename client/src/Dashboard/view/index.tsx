import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/scrollbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

interface Order {
  id: number;
  status: string;
}

interface Inventory {
  [key: string]: number;
}

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [inventory, setInventory] = useState<Inventory>({
    tomato: 5,
    lemon: 5,
    potato: 5,
    rice: 5,
    ketchup: 5,
    lettuce: 5,
    onion: 5,
    cheese: 5,
    meat: 5,
    chicken: 5,
  });

  const placeOrder = () => {
    const newOrder: Order = {
      id: orders.length + 1,
      status: "En preparación",
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10 px-6 overflow-hidden">
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Gestión de Pedidos
      </motion.h1>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          onClick={placeOrder}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform"
        >
          Pedir un Plato
        </Button>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl items-start">
        {/* Sección de órdenes */}
        <Card className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-h-[300px] h-[400px] overflow-hidden">
          <CardContent className="h-full flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Órdenes
            </h2>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {orders.length === 0 ? (
                  <p className="text-gray-500">
                    No hay órdenes en este momento.
                  </p>
                ) : (
                  orders.map((order) => (
                    <motion.li
                      key={order.id}
                      className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="font-medium">Pedido {order.id}</span>
                      <span className="text-gray-600">{order.status}</span>
                    </motion.li>
                  ))
                )}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sección de inventario */}
        <Card className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-h-[300px] h-[400px]">
          <CardContent>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Inventario
            </h2>
            <ul className="grid grid-cols-2 gap-3">
              {Object.entries(inventory).map(([item, quantity]) => (
                <motion.li
                  key={item}
                  className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="font-medium capitalize">{item}</span>
                  <span className="text-gray-600">{quantity}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Sección de recetas */}
        <Card className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-h-[300px] h-[400px]">
          <CardContent>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Recetas
            </h2>
            <p className="text-gray-500">
              Aquí aparecerán las recetas disponibles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
