<?php

namespace App\Http\Controllers\API\Admin\Language;

use App\Http\Controllers\API\ApiController;
use App\Http\Requests\Admin\Language\StoreLanguageRequest;
use App\Http\Requests\Admin\Language\UpdateLanguageRequest;
use App\Http\Resources\Admin\Language\LanguageResource;
use App\Services\Admin\Language\LanguageService;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class LanguageController extends ApiController
{
    private LanguageService $languageService;

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
        $language = $this->languageService->create($request);

        return $this->successResponse($language, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $language
     * @return JsonResponse
     */
    public function show(int $language): JsonResponse
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
    public function update(UpdateLanguageRequest $request, int $language): JsonResponse
    {
        $language = $this->languageService->update($request, $language);

        return $this->successResponse($language);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $language
     * @return JsonResponse
     */
    public function destroy(int $language): JsonResponse
    {
        $language = $this->languageService->destroy($language);

        return $this->successResponse($language);
    }
}
