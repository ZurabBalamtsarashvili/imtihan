<?php

namespace App\Services\Base;

class BaseService
{
    protected string $model;

    /**
     * @var string
     */
    public function __construct(string $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     */
    public function list(array $with = [], array $where = [])
    {
        return $this->model::with($with)->where($where)->latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(object $request): object
    {
        return $this->model::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show(int $id, array $with = [], array $where = [])
    {
        return $this->model::with($with)->where($where)->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param object $request
     * @param int $id
     * @param array $where
     * @return object
     */
    public function update(object $request, int $id, array $where = []): object
    {
        $this->model::where($where)->findOrFail($id)->update($request->validated());

        return $this->model::findOrFail($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param array $where
     * @return mixed
     */
    public function destroy(int $id, array $where = []): mixed
    {
        return $this->model::where($where)->findOrFail($id)->delete();
    }
}
