// src/lib/data/grapes.data.ts
import allGrapes from '$data/jsons/wine-grapes.json';
import type { Grapes } from '$lib/types';

export const grapes = {
	pt: allGrapes['pt'] as Grapes[],
	uy: [] as Grapes[]
};
