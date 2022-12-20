import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { token: "", isLoggedIn: false };
const initialCartState = { cart: [], Price: 0 };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    AddToCart(state, action) {
      state.cart.push(action.payload.item);
      
    },
    RemoveFromCart(state, action) {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
    MakePrice(state) {
      state.Price = 0;
    },
    CalculatePrice(state) {
      if (state.cart.length > 0) {
        state.cart.map((x) => {
          state.Price = x.qty * x.price + state.Price;
        });
      }
    },
    ChangeQty(state, action) {
      state.cart.map((x) => {
        if (x.id == action.payload.id) {
          x.qty = action.payload.qty;
        }
      });
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export const authAction = authSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
