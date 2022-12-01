import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticlesState} from "store/articles/types";
import {api} from "src/constants";
import {action} from "@storybook/addon-actions";


const initialState: ArticlesState = {
    articles: [],
    loading: false,
    error: '',
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles: (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading =true;
            state.error = '';
        });
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.rejected, (state, action: { error: any}) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
});

export const fetchData = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await fetch(`${api}/v3/articles`);
    return response.json();
});

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
