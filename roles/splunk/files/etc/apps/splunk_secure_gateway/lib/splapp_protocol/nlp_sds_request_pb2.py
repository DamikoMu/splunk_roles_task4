# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nlp_sds_request.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import common_pb2 as common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15nlp_sds_request.proto\x12\x0b\x41pplication\x1a\x0c\x63ommon.proto\"\xd2\x01\n\x12\x45xecuteSavedSearch\x12\x39\n\x11\x64\x65viceCredentials\x18\x01 \x01(\x0b\x32\x1e.Application.DeviceCredentials\x12\x15\n\rsavedSearchId\x18\x02 \x01(\t\x12;\n\x06params\x18\x03 \x03(\x0b\x32+.Application.ExecuteSavedSearch.ParamsEntry\x1a-\n\x0bParamsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xc7\x01\n\x17\x45xecuteSavedSearchError\x12\x37\n\x04\x63ode\x18\x01 \x01(\x0e\x32).Application.ExecuteSavedSearchError.Code\x12\x0b\n\x03msg\x18\x02 \x01(\t\"f\n\x04\x43ode\x12\x1a\n\x16SPLUNK_QUERY_TIMED_OUT\x10\x00\x12\x17\n\x13INVALID_CREDENTIALS\x10\x01\x12\x1c\n\x18INSUFFICIENT_PERMISSIONS\x10\x02\x12\x0b\n\x07UNKNOWN\x10\x03\"\x98\x01\n\x18\x45xecuteSavedSearchResult\x12\x35\n\x05\x65rror\x18\x01 \x01(\x0b\x32$.Application.ExecuteSavedSearchErrorH\x00\x12;\n\x11visualizationData\x18\x02 \x01(\x0b\x32\x1e.Application.VisualizationDataH\x00\x42\x08\n\x06resultBh\n$com.splunk.mobile.nlp.service.iframeP\x01Z>cd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/ssgb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'nlp_sds_request_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n$com.splunk.mobile.nlp.service.iframeP\001Z>cd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/ssg'
  _EXECUTESAVEDSEARCH_PARAMSENTRY._options = None
  _EXECUTESAVEDSEARCH_PARAMSENTRY._serialized_options = b'8\001'
  _EXECUTESAVEDSEARCH._serialized_start=53
  _EXECUTESAVEDSEARCH._serialized_end=263
  _EXECUTESAVEDSEARCH_PARAMSENTRY._serialized_start=218
  _EXECUTESAVEDSEARCH_PARAMSENTRY._serialized_end=263
  _EXECUTESAVEDSEARCHERROR._serialized_start=266
  _EXECUTESAVEDSEARCHERROR._serialized_end=465
  _EXECUTESAVEDSEARCHERROR_CODE._serialized_start=363
  _EXECUTESAVEDSEARCHERROR_CODE._serialized_end=465
  _EXECUTESAVEDSEARCHRESULT._serialized_start=468
  _EXECUTESAVEDSEARCHRESULT._serialized_end=620
# @@protoc_insertion_point(module_scope)
