<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\API\ApiController;
use App\Http\Requests\Admin\Language\StoreLanguageRequest;
use App\Http\Requests\Admin\Language\UpdateLanguageRequest;
use App\Http\Resources\Admin\LanguageResource;
use App\Services\Admin\LanguageService;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class LanguageController extends ApiController
{
    public function __construct(LanguageService $service)
    {
        $this->languageService = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return $this->successResponse(LanguageResource::collection($this->languageService->list()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreLanguageRequest  $request
     * @return JsonResponse
     */
    public function store(StoreLanguageRequest $request): JsonResponse
    {
        $this->languageService->create($request);

        return $this->successResponse([], __('response.created'), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $language
     * @return JsonResponse
     */
    public function show($language): JsonResponse
    {
        return $this->successResponse(new LanguageResource($this->languageService->show($language)));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateLanguageRequest  $request
     * @param  int  $language
     * @return JsonResponse
     */
    public function update(UpdateLanguageRequest $request, $language): JsonResponse
    {
        $this->languageService->update($request, $language);

        return $this->successResponse([], __('response.updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $language
     * @return JsonResponse
     */
    public function destroy($language): JsonResponse
    {
        $this->languageService->destroy($language);

        return $this->successResponse([], __('response.deleted'));
    }
}
