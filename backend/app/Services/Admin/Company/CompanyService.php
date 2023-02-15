<?php

namespace App\Services\Admin\Company;

use App\Models\Company;
use App\Services\Base\BaseService;
use Illuminate\Support\Facades\Storage;

class CompanyService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Company::class);
    }

    /*
     * Store a newly created resource in storage.
     *
     * @param object $request
     */
    public function create(object $request): object
    {
        $path = $request->file('logo')->store('companies');
        $data = $request->safe()->merge(['logo' => Storage::disk('minio')->url($path)]);

        return $this->model::create($data->all());
    }
}
