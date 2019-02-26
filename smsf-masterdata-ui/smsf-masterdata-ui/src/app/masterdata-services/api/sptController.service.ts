/**
 * Automation API provider
 * Automation provides template of this description, and anyone may modify it in your own project.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PageInfoOfSptDto } from '../model/pageInfoOfSptDto';
import { Spt } from '../model/spt';
import { SptDto } from '../model/sptDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SptControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * sptBatchDelete
     * 
     * @param ids ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptBatchDeleteUsingDELETE(ids: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public sptBatchDeleteUsingDELETE(ids: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public sptBatchDeleteUsingDELETE(ids: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public sptBatchDeleteUsingDELETE(ids: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling sptBatchDeleteUsingDELETE.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (ids !== undefined && ids !== null) {
            queryParameters = queryParameters.set('ids', <any>ids);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/spt/batch-delete`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptBatchSave
     * 
     * @param spts spts
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptBatchSaveUsingPOST(spts: Array<Spt>, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public sptBatchSaveUsingPOST(spts: Array<Spt>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public sptBatchSaveUsingPOST(spts: Array<Spt>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public sptBatchSaveUsingPOST(spts: Array<Spt>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spts === null || spts === undefined) {
            throw new Error('Required parameter spts was null or undefined when calling sptBatchSaveUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<number>(`${this.basePath}/masterdata/spt/batch-save`,
            spts,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptDelete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptDeleteUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public sptDeleteUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public sptDeleteUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public sptDeleteUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling sptDeleteUsingDELETE.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/spt/delete`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptFindByColumnsPaged
     * 
     * @param columns columns
     * @param spt spt
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptFindByColumnsPagedUsingPOST(columns: string, spt: Spt, observe?: 'body', reportProgress?: boolean): Observable<Array<SptDto>>;
    public sptFindByColumnsPagedUsingPOST(columns: string, spt: Spt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SptDto>>>;
    public sptFindByColumnsPagedUsingPOST(columns: string, spt: Spt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SptDto>>>;
    public sptFindByColumnsPagedUsingPOST(columns: string, spt: Spt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (columns === null || columns === undefined) {
            throw new Error('Required parameter columns was null or undefined when calling sptFindByColumnsPagedUsingPOST.');
        }

        if (spt === null || spt === undefined) {
            throw new Error('Required parameter spt was null or undefined when calling sptFindByColumnsPagedUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<SptDto>>(`${this.basePath}/masterdata/spt/find-by/${encodeURIComponent(String(columns))}`,
            spt,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptFindByPaged
     * 
     * @param pageNo page-no
     * @param pageSize page-size
     * @param spt spt
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptFindByPagedUsingPOST(pageNo: number, pageSize: number, spt: Spt, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfSptDto>;
    public sptFindByPagedUsingPOST(pageNo: number, pageSize: number, spt: Spt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfSptDto>>;
    public sptFindByPagedUsingPOST(pageNo: number, pageSize: number, spt: Spt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfSptDto>>;
    public sptFindByPagedUsingPOST(pageNo: number, pageSize: number, spt: Spt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling sptFindByPagedUsingPOST.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling sptFindByPagedUsingPOST.');
        }

        if (spt === null || spt === undefined) {
            throw new Error('Required parameter spt was null or undefined when calling sptFindByPagedUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PageInfoOfSptDto>(`${this.basePath}/masterdata/spt/find-by-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            spt,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptFindBy
     * 
     * @param spt spt
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptFindByUsingPOST(spt: Spt, observe?: 'body', reportProgress?: boolean): Observable<Array<SptDto>>;
    public sptFindByUsingPOST(spt: Spt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SptDto>>>;
    public sptFindByUsingPOST(spt: Spt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SptDto>>>;
    public sptFindByUsingPOST(spt: Spt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spt === null || spt === undefined) {
            throw new Error('Required parameter spt was null or undefined when calling sptFindByUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<SptDto>>(`${this.basePath}/masterdata/spt/find-by`,
            spt,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptFindOne
     * 
     * @param fieldName fieldName
     * @param value value
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptFindOneUsingGET(fieldName: string, value: string, observe?: 'body', reportProgress?: boolean): Observable<SptDto>;
    public sptFindOneUsingGET(fieldName: string, value: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SptDto>>;
    public sptFindOneUsingGET(fieldName: string, value: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SptDto>>;
    public sptFindOneUsingGET(fieldName: string, value: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling sptFindOneUsingGET.');
        }

        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling sptFindOneUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fieldName !== undefined && fieldName !== null) {
            queryParameters = queryParameters.set('fieldName', <any>fieldName);
        }
        if (value !== undefined && value !== null) {
            queryParameters = queryParameters.set('value', <any>value);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<SptDto>(`${this.basePath}/masterdata/spt/find-one`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptFind
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptFindUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<SptDto>;
    public sptFindUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SptDto>>;
    public sptFindUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SptDto>>;
    public sptFindUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling sptFindUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<SptDto>(`${this.basePath}/masterdata/spt/find`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptListPaged
     * 
     * @param pageNo page-no
     * @param pageSize page-size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfSptDto>;
    public sptListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfSptDto>>;
    public sptListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfSptDto>>;
    public sptListPagedUsingGET(pageNo: number, pageSize: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling sptListPagedUsingGET.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling sptListPagedUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PageInfoOfSptDto>(`${this.basePath}/masterdata/spt/list-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptList
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptListUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<SptDto>>;
    public sptListUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SptDto>>>;
    public sptListUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SptDto>>>;
    public sptListUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<SptDto>>(`${this.basePath}/masterdata/spt/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptSave
     * 
     * @param spt spt
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptSaveUsingPOST(spt: Spt, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public sptSaveUsingPOST(spt: Spt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public sptSaveUsingPOST(spt: Spt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public sptSaveUsingPOST(spt: Spt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spt === null || spt === undefined) {
            throw new Error('Required parameter spt was null or undefined when calling sptSaveUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<number>(`${this.basePath}/masterdata/spt/save`,
            spt,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * sptUpdate
     * 
     * @param spt spt
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sptUpdateUsingPUT(spt: Spt, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public sptUpdateUsingPUT(spt: Spt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public sptUpdateUsingPUT(spt: Spt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public sptUpdateUsingPUT(spt: Spt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spt === null || spt === undefined) {
            throw new Error('Required parameter spt was null or undefined when calling sptUpdateUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<number>(`${this.basePath}/masterdata/spt/update`,
            spt,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
